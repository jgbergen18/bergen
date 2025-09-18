import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 w-16 p-0 hover:bg-surface-hover rounded-full border border-border"
    >
      {/* Switch Base */}
      <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-slate-700' 
          : 'bg-amber-200'
      }`}>
        {/* Switch Toggle with Icon */}
        <div className={`absolute top-0.5 h-5 w-5 rounded-full shadow-sm transition-all duration-300 transform flex items-center justify-center ${
          theme === 'dark' 
            ? 'translate-x-6 bg-slate-600' 
            : 'translate-x-0.5 bg-amber-400'
        }`}>
          {theme === 'dark' ? (
            <Moon className="h-3 w-3 text-blue-200" />
          ) : (
            <Sun className="h-3 w-3 text-amber-800" />
          )}
        </div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};