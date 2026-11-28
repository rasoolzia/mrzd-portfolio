import { brand } from '@/data/portfolio';

export default function BrandWordmark() {
   return (
      <div className="mb-6">
         <h1
            aria-label={brand.fullName}
            className="flex items-baseline gap-1 text-5xl font-bold sm:text-6xl"
         >
            {brand.letters.map(({ letter, color }) => (
               <span key={letter} style={{ color }} aria-hidden="true">
                  {letter}
               </span>
            ))}
         </h1>

         <p className="mt-2 text-xs tracking-wide text-slate-400 sm:text-sm">
            {brand.meaning}
         </p>
      </div>
   );
}
