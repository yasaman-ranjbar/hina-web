"use client";

import { tailwindColors } from "../../../../tailwind.config";
import { colord } from "colord";

const getTextColor = (bg: string): string => colord(bg).isDark() ? '#ddd' : '#333';

function Colors() {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(tailwindColors).map(([name, color]) => (
        <ColorBox key={name} name={name} color={color} />
      ))}
    </div>
  );
}

export default Colors;

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => (
  <div
    className="w-96 h-60 flex flex-col items-center text-center uppercase"
    style={{ background: color, color: getTextColor(color) }}
  >
    <span>{name}</span>
    <span>{color}</span>
  </div>
);
