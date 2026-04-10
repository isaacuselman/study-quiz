export const BG = "#0b0b0f";
export const TEXT = "#f0f0f0";
export const DIM = "#a0a0a0";
export const GREEN = "#22c55e";
export const RED = "#ef4444";
export const YELLOW = "#facc15";
export const CARD = "#18181f";
export const BORDER = "#2a2a35";
export const ORANGE = "#f97316";
export const CYAN = "#06b6d4";

export const btn = (bg, small) => ({
  padding: small ? "6px 16px" : "12px 32px", background: bg, color: "#000", border: "none",
  borderRadius: 6, fontWeight: 700, fontSize: small ? 12 : 14, cursor: "pointer",
  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
});

export const wrap = { minHeight: "100vh", fontFamily: "'JetBrains Mono', 'Fira Code', monospace", background: BG, color: TEXT, padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center" };
