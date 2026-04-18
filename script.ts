import fs from "fs";

let code = fs.readFileSync("src/App.tsx", "utf8");

// Backgrounds & overlays
code = code.replace(/bg-\[#0A0B14\]/g, "bg-dark");
code = code.replace(/bg-\[#14152a\]/g, "bg-dark3");
code = code.replace(/bg-white\/5/g, "bg-overlay");
code = code.replace(/hover:bg-white\/5/g, "hover:bg-overlay");
code = code.replace(/hover:bg-white\/10/g, "hover:bg-overlay-hover");
code = code.replace(/hover:bg-white\/\[0\.02\]/g, "hover:bg-overlay");
code = code.replace(/bg-\[#0F1022\]/g, "bg-dark2");
code = code.replace(/hover:bg-\[#0F1022\]\/80/g, "hover:bg-dark3");

// We need to keep pure text-white in buttons and badges that have solid colors (like bg-ph2, bg-red/amber/emerald, bg-[#4F46E5] etc)
// And we also want header text to flip to dark in light mode
// Let's replace `text-white` with `text-txt` in specific target strings to be safe avoiding RegEx false positives.

const targets = [
  'text-white flex items-center">',
  'text-white mb-6 leading-',
  'text-white flex items-baseline',
  'text-white flex items-center gap-2',
  'text-white mb-8 relative z-10',
  'text-white mb-4 tracking-tight',
  'text-white text-sm font-semibold',
  'text-white text-sm font-medium',
  'text-white text-sm font-bold font-mono',
  'text-white font-bold mb-2',
  'text-white">One platform for your entire operation<',
  'text-white mb-3 tracking-tight',
  'text-white mb-1 font-heading',
  'text-white/70 uppercase',
  'text-white">Simple, transparent pricing<',
  'text-white mb-2',
  'text-white">{p.price}<',
  'text-white mb-6 tracking-tight',
  'text-white font-bold mb-4',
  'hover:text-white',
  'selection:text-white',
];

for (const target of targets) {
  code = code.split(target).join(target.replace('text-white', 'text-txt'));
}

// Ensure the brand-colored elements keep text-white
// Examples: <button className="... bg-ph2 ... text-white"> -> keep white, these are not in my targets array.

fs.writeFileSync("src/App.tsx", code);
console.log("Replacements successful!");
