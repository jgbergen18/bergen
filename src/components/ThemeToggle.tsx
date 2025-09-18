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
      className="relative h-9 w-12 p-0 hover:bg-surface-hover rounded-full border border-border"
    >
      {/* Light Switch Base */}
      <div className={`absolute inset-1 rounded-full transition-all duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-600 to-slate-700' 
          : 'bg-gradient-to-r from-blue-100 to-blue-200'
      }`}>
        {/* Switch Toggle */}
        <div className={`h-5 w-5 rounded-full shadow-sm transition-all duration-300 transform ${
          theme === 'dark' 
            ? 'translate-x-4 bg-gradient-to-br from-orange-400 to-orange-500 shadow-orange-300' 
            : 'translate-x-0 bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-yellow-200'
        }`}>
          {/* Light/Dark indicator */}
          <div className={`absolute inset-0.5 rounded-full transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-orange-300 opacity-80'
              : 'bg-yellow-200 opacity-60'
          }`} />
        </div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};