import { PixelRocket } from '@/components/svg/PixelRocket';
import { profile } from '@/data/portfolio';
import NavLinks from './NavLinks';
import ParallaxScene from './ParallaxScene';
import RainbowDivider from './RainbowDivider';

export default function Portfolio() {
   return (
      <div className="flex min-h-screen overflow-hidden bg-[#0a0e27] font-['JetBrains_Mono',monospace] text-slate-400">
         {/* Left — content */}
         <section className="relative z-10 flex flex-1 items-start md:items-center justify-center px-6 py-10 md:px-12 lg:px-16">
            <div className="max-w-xl">
               <PixelRocket />

               <h1 className="mb-6 bg-linear-to-r from-[#ff4444] to-[#ff7b00] bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
                  {profile.fullName}
               </h1>

               <p className="mb-6 text-sm leading-relaxed text-sky-300 md:text-base">
                  {profile.bio}
               </p>

               <RainbowDivider />

               <NavLinks />
            </div>
         </section>

         {/* Right — parallax scene */}
         <aside className="flex-1 hidden md:block">
            <ParallaxScene />
         </aside>
      </div>
   );
}
