import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.resolve('data')
const DATA_FILE = path.join(DATA_DIR, 'quiz-progress.json')

const EMPTY_DATA = { schemaVersion: 4, reviewItems: [], questionHistory: {}, quizDates: [] }

function quizDataMiddleware(req, res) {
  if (req.method === 'GET') {
    try {
      if (fs.existsSync(DATA_FILE)) {
        const raw = fs.readFileSync(DATA_FILE, 'utf8')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(raw)
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(EMPTY_DATA))
      }
    } catch (e) {
      console.error('Failed to read quiz data:', e)
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error: 'Failed to read data' }))
    }
  } else if (req.method === 'POST') {
    let body = ''
    req.on('data', chunk => { body += chunk })
    req.on('end', () => {
      try {
        JSON.parse(body) // validate it's valid JSON
        fs.writeFileSync(DATA_FILE, body, 'utf8')
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ ok: true }))
      } catch (e) {
        console.error('Failed to write quiz data:', e)
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Invalid JSON or write failed' }))
      }
    })
  } else {
    res.writeHead(405)
    res.end()
  }
}

function quizDataPlugin() {
  return {
    name: 'quiz-data-persistence',
    configureServer(server) {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
      server.middlewares.use('/api/quiz-data', quizDataMiddleware)
    },
    configurePreviewServer(server) {
      if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
      server.middlewares.use('/api/quiz-data', quizDataMiddleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), quizDataPlugin()],
  server: {
    port: 5173,
    strictPort: true,
  },
})
