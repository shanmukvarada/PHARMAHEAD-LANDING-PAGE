import fs from "fs";

let code = fs.readFileSync("src/App.tsx", "utf8");

// Fix buttons that should just ALWAYS be white on dark colored backgrounds
code = code.replace(/className=\"bg-ph2 text-txt/g, 'className=\"bg-ph2 text-white');
code = code.replace(/className=\"w-full sm:w-auto bg-ph2 hover:bg-ph-lt text-txt/g, 'className=\"w-full sm:w-auto bg-ph2 hover:bg-ph-lt text-white');
code = code.replace(/selection:text-txt/g, 'selection:text-white');
code = code.replace(/bg-ph2 hover:bg-ph-lt text-txt/g, 'bg-ph2 hover:bg-ph-lt text-white');
code = code.replace(/bg-\[#10B981\] text-txt/g, 'bg-[#10B981] text-white');
code = code.replace(/bg-\[#4F46E5\] text-txt/g, 'bg-[#4F46E5] text-white');
code = code.replace(/bg-\[#EF4444\] text-txt/g, 'bg-[#EF4444] text-white');
code = code.replace(/bg-\[#F59E0B\] text-txt/g, 'bg-[#F59E0B] text-white');
code = code.replace(/bg-\[#0EA5E9\] text-txt/g, 'bg-[#0EA5E9] text-white');
code = code.replace(/bg-\[#8B5CF6\] text-txt/g, 'bg-[#8B5CF6] text-white');

fs.writeFileSync("src/App.tsx", code);
console.log("Replacements successful!");
