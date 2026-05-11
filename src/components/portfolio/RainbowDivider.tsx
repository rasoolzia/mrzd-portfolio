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
      <div className="flex h-2 my-8">
         {COLORS.map((color) => (
            <div
               key={color}
               className="flex-1 hover:flex-2 duration-200"
               style={{ background: color }}
            />
         ))}
      </div>
   );
}
