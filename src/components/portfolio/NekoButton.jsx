import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const SPRITE_SHEET = "https://raw.githubusercontent.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f3f6d3/oneko.gif";

// Each frame is 32x32 on a 128x128 spritesheet (4 cols x 4 rows... actually it's different)
// We'll use named positions from the oneko sprite map
const NEKOFRAMES = {
  idle:     [[-3, -3]],
  alert:    [[-7, -3]],
  scratchSelf: [[-5, 0], [-6, 0]],
  scratchWall: [[-0, -4], [-0, -3]],
  tired:    [[-6, -3]],
  sleeping: [[-2, 0], [-2, -1]],
  licking:  [[-6, 0], [-6, -1]],
  yawn:     [[-3, -2]],
};

const BEHAVIORS = [
  { state: "idle",        frames: [[-3, -3]], duration: 3000 },
  { state: "licking",     frames: [[-6, 0], [-6, -1], [-6, 0], [-6, -1]], duration: 2000 },
  { state: "scratchSelf", frames: [[-5, 0], [-6, 0], [-5, 0], [-6, 0]], duration: 2000 },
  { state: "yawn",        frames: [[-3, -2]], duration: 1500 },
  { state: "sleeping",    frames: [[-2, 0], [-2, -1], [-2, 0], [-2, -1]], duration: 3000 },
  { state: "alert",       frames: [[-7, -3]], duration: 1000 },
];

const NekoSprite = () => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [behaviorIndex, setBehaviorIndex] = useState(0);
  const frameRef = useRef(null);
  const behaviorRef = useRef(null);

  useEffect(() => {
    const behavior = BEHAVIORS[behaviorIndex];

    // Cycle frames within current behavior
    frameRef.current = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % behavior.frames.length);
    }, 200);

    // Switch to next behavior after duration
    behaviorRef.current = setTimeout(() => {
      setBehaviorIndex((prev) => (prev + 1) % BEHAVIORS.length);
      setFrameIndex(0);
    }, behavior.duration);

    return () => {
      clearInterval(frameRef.current);
      clearTimeout(behaviorRef.current);
    };
  }, [behaviorIndex]);

  const behavior = BEHAVIORS[behaviorIndex];
  const [col, row] = behavior.frames[frameIndex] ?? behavior.frames[0];

  return (
    <div
      style={{
        width: 32,
        height: 32,
        imageRendering: "pixelated",
        backgroundImage: `url(${SPRITE_SHEET})`,
        backgroundPosition: `${col * 32}px ${row * 32}px`,
        backgroundSize: "auto",
        transform: "scale(1.5)",
        transformOrigin: "center bottom",
      }}
    />
  );
};

const NekoButton = ({ isOpen, onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Cat sitting on button */}
      {!isOpen && (
        <div className="mb-1 flex justify-center">
          <NekoSprite />
        </div>
      )}

      {/* The actual button */}
      <button
        onClick={onClick}
        className={`h-14 flex items-center justify-center shadow-lg transition-all duration-300 bg-primary text-primary-foreground cursor-pointer ${
          isOpen ? "w-14 rounded-full" : "w-auto px-6 rounded-full"
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="flex items-center gap-2">
            <MessageCircle size={24} />
            <span className="font-semibold whitespace-nowrap">
              Chat with Aldrin
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default NekoButton;