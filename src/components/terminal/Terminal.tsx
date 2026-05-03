type Props = {
   children: React.ReactNode;
};

export default function Terminal({ children }: Props) {
   return (
      <div className="max-w-5xl mx-auto bg-black border border-zinc-800 rounded-md shadow-2xl overflow-hidden">
         {children}
      </div>
   );
}
