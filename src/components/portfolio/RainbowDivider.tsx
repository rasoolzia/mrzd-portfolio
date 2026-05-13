const COLORS = [
   '#ff4444',
   '#ff8844',
   '#ffdd44',
   '#44ff44',
   '#44ddff',
   '#4444ff',
];

export default function RainbowDivider() {
   return (
      <div className="my-8 flex h-2 overflow-hidden rounded-full">
         {COLORS.map((color) => (
            <div
               key={color}
               className="flex-1 transition-[flex-grow] duration-200 hover:flex-2"
               style={{ backgroundColor: color }}
            />
         ))}
      </div>
   );
}
