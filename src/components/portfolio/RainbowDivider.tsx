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
      <div className="my-8 h-2 w-full overflow-hidden rounded-full">
         <div className="flex h-full w-[200%] animate-infinite-scroll">
            {[...COLORS, ...COLORS].map((color, index) => (
               <div
                  key={`${color}-${index}`}
                  className="flex-1"
                  style={{ backgroundColor: color }}
               />
            ))}
         </div>
      </div>
   );
}
