"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 animate-pulse"></div>
    );
  }

  const cycleTheme = () => {
    if (theme === "system") setTheme("light");
    else if (theme === "light") setTheme("dark");
    else setTheme("system");
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 transition-colors duration-200 text-xs"
      title={`Theme: ${theme || "system"} (Click to cycle)`}
      aria-label="Toggle visual theme"
    >
      {theme === "dark" ? (
        <i className="fas fa-moon text-sm text-emerald-400"></i>
      ) : theme === "light" ? (
        <i className="fas fa-sun text-sm text-amber-500"></i>
      ) : (
        <i className="fas fa-desktop text-xs text-emerald-600 dark:text-emerald-400"></i>
      )}
    </button>
  );
}
