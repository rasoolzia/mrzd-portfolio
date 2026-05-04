type Props = {
   items: React.ReactNode[];
};

export default function TerminalList({ items }: Props) {
   return (
      <ul className="space-y-1">
         {items.map((item, i) => (
            <li key={i}>
               <span className="text-green-400 mr-2">▸</span>
               {item}
            </li>
         ))}
      </ul>
   );
}
