import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative inline-flex h-9 w-16 items-center p-1 rounded-full border border-border transition-colors duration-300 ${
        isDark
          ? "justify-end bg-slate-700 hover:bg-slate-700"
          : "justify-start bg-amber-200 hover:bg-amber-200"
      }`}
    >
      {/* Thumb (flex alignment keeps it centered + end-aligned automatically) */}
      <div
        className={`h-6 w-6 rounded-full shadow-sm flex items-center justify-center transition-colors duration-300 ${
          isDark ? "bg-slate-600" : "bg-amber-400"
        }`}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-blue-200" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-800" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
