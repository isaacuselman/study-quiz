import { useState, useEffect, useCallback } from "react";
import { loadData, saveData } from "../utils/migration";

export default function useQuizData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const d = loadData();
    setData(d);
    setLoading(false);
  }, []);

  const persist = useCallback((updates) => {
    setData(prev => {
      const next = { ...prev, ...updates };
      saveData(next);
      return next;
    });
  }, []);

  return {
    loading,
    reviewItems: data?.reviewItems || [],
    questionHistory: data?.questionHistory || {},
    quizDates: data?.quizDates || [],
    persist,
  };
}
