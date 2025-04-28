
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

type ColorTheme = "blue" | "teal" | "orange" | "purple" | "green";

const ThemePaletteSwitcher = () => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("blue");

  useEffect(() => {
    const savedTheme = localStorage.getItem("colorTheme") as ColorTheme | null;
    if (savedTheme) {
      setColorTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to blue if no theme is saved
      applyTheme("blue");
      localStorage.setItem("colorTheme", "blue");
    }
  }, []);

  const applyTheme = (theme: ColorTheme) => {
    // First remove all theme classes
    document.body.classList.remove("blue-theme", "teal-theme", "orange-theme", "purple-theme", "green-theme");
    
    // Add the selected theme class
    document.body.classList.add(`${theme}-theme`);

    // Apply CSS variables directly to ensure consistency
    document.documentElement.style.setProperty('--current-theme-color', `var(--${theme}-color)`);
    document.documentElement.style.setProperty('--current-theme-hover', `var(--${theme}-hover)`);
    document.documentElement.style.setProperty('--current-theme-light', `var(--${theme}-light)`);
    
    // Force style recalculation
    document.body.offsetHeight;
    
    console.log(`Theme changed to: ${theme}-theme`);
  };

  const changeTheme = (theme: ColorTheme) => {
    // Apply the theme visually
    applyTheme(theme);
    
    // Update state and save to localStorage
    setColorTheme(theme);
    localStorage.setItem("colorTheme", theme);
    
    toast(`${theme.charAt(0).toUpperCase() + theme.slice(1)} theme applied`, {
      duration: 2000,
    });
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
      <div className="flex gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className={`w-8 h-8 rounded-full bg-blue-500 ${colorTheme === "blue" ? "ring-2 ring-offset-2 ring-blue-500" : ""}`}
          onClick={() => changeTheme("blue")}
          aria-label="Blue theme"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`w-8 h-8 rounded-full bg-teal-500 ${colorTheme === "teal" ? "ring-2 ring-offset-2 ring-teal-500" : ""}`}
          onClick={() => changeTheme("teal")}
          aria-label="Teal theme"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`w-8 h-8 rounded-full bg-orange-500 ${colorTheme === "orange" ? "ring-2 ring-offset-2 ring-orange-500" : ""}`}
          onClick={() => changeTheme("orange")}
          aria-label="Orange theme"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`w-8 h-8 rounded-full bg-purple-500 ${colorTheme === "purple" ? "ring-2 ring-offset-2 ring-purple-500" : ""}`}
          onClick={() => changeTheme("purple")}
          aria-label="Purple theme"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`w-8 h-8 rounded-full bg-green-500 ${colorTheme === "green" ? "ring-2 ring-offset-2 ring-green-500" : ""}`}
          onClick={() => changeTheme("green")}
          aria-label="Green theme"
        />
      </div>
    </div>
  );
};

export default ThemePaletteSwitcher;
