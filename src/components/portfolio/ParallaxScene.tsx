import { useEffect, useRef } from 'react';

const LAYERS: {
   depth: number;
   shape: 'arc' | 'triangle' | 'wavy' | 'cross';
}[] = [
   { depth: -0.5, shape: 'arc' },
   { depth: -1.5, shape: 'triangle' },
   { depth: 0.32, shape: 'wavy' },
   { depth: 0.86, shape: 'cross' },
   { depth: -1.7, shape: 'cross' },
];

const SHAPE_PATHS = {
   arc: (
      <path d="M121.6,310.2c0.1,96,79.2,174.9,175.2,174.8c96-0.1,174.9-79.2,174.8-175.2" />
   ),
   triangle: (
      <path d="M297.1,209.1L431.4,474H163.5L297.1,209.1 M297,147L118,502h359L297,147L297,147z" />
   ),
   wavy: (
      <path
         d="M71,71c-15.9,49.6-6.9,65.8,0,72c7.1,6.5,17,6.7,74,1c53.5-5.4,63.5-7.5,71,0
             c7.1,7.1,6,16.9,0,72c-4.7,43.3-7,65,0,72c7.1,7.1,16.8,6,72,0c43.3-4.7,65.1-6.9,72,0
             c7.6,7.6,5.7,17.9,0,73c-5.7,56.1-5.8,65.5,1,72c8,7.7,18.6,4.7,71-1
             c55.9-6.1,65.3-5,72,1c5.8,5.1,17.1,20.5,1,72"
      />
   ),
   cross: (
      <>
         <polyline points="297,134 297,310 297,485" />
         <line x1="122" y1="310" x2="472" y2="310" />
      </>
   ),
} as const;

const STROKE_STYLE = {
   fill: 'none',
   stroke: '#64b5f6',
   strokeWidth: 4,
   strokeLinecap: 'round' as const,
   strokeLinejoin: 'round' as const,
};

function ShapeSVG({ shape }: { shape: keyof typeof SHAPE_PATHS }) {
   return <g style={STROKE_STYLE}>{SHAPE_PATHS[shape]}</g>;
}

export default function ParallaxScene() {
   const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

   useEffect(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const handleMouseMove = (e: MouseEvent) => {
         const offsetX = (e.clientX - centerX) / centerX;
         const offsetY = (e.clientY - centerY) / centerY;

         layerRefs.current.forEach((el, i) => {
            if (!el) return;
            const depth = LAYERS[i].depth;
            const x = offsetX * depth * 100;
            const y = offsetY * depth * 100;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
         });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
   }, []);

   return (
      <div className="relative h-full w-full overflow-hidden">
         {LAYERS.map((layer, i) => (
            <div
               key={i}
               ref={(el) => {
                  layerRefs.current[i] = el;
               }}
               className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
            >
               <div className="w-150 h-150 opacity-15">
                  <svg
                     viewBox="0 0 600 600"
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-full w-full"
                  >
                     <ShapeSVG shape={layer.shape} />
                  </svg>
               </div>
            </div>
         ))}
      </div>
   );
}
