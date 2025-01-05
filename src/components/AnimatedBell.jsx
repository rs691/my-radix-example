import { Bell } from "lucide-react";
import { useState } from "react";
  

export default function AnimatedBell() {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    
    <div className="flex items-center justify-center">
      <button
        onClick={handleClick}
        className="relative p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <Bell 
          size={32}
          className={`text-blue-500 ${
            isAnimating ? 'animate-[wiggle_1s_ease-in-out]' : ''
          }`}
        />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-bounce" />
      </button>
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(25deg); }
          50% { transform: rotate(-20deg); }
          75% { transform: rotate(15deg); }
        }
      `}</style>
    </div>

    
    
  );
}