type Row = {
   label: string;
   value: React.ReactNode;
};

type Props = {
   rows: Row[];
   cols?: string;
};

export default function InfoGrid({ rows, cols = '90px 1fr' }: Props) {
   return (
      <div
         className="grid gap-x-3 gap-y-2 mt-2"
         style={{ gridTemplateColumns: cols }}
      >
         {rows.map((row) => (
            <div key={row.label} className="contents">
               <span className="text-green-400">{row.label}</span>
               <span>{row.value}</span>
            </div>
         ))}
      </div>
   );
}
