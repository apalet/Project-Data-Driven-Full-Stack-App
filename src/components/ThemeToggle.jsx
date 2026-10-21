"use client";
import { useTheme } from "@/src/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: theme === 'light' ? '#3B82F6' : '#60A5FA',
        border: 'none',
        cursor: 'pointer',
        padding: '8px 16px',
        borderRadius: '20px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
