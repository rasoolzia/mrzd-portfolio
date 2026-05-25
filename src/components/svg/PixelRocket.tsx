export const PixelRocket = ({ size = 80, ...props }) => {
   return (
      <svg
         width={size}
         height={size}
         className="w-20 mb-8"
         viewBox="0 0 64 64"
         xmlns="http://www.w3.org/2000/svg"
         style={{
            imageRendering: 'pixelated',
         }}
         {...props}
      >
         <rect x="28" y="8" width="8" height="8" fill="#ff4444" />
         <rect x="24" y="16" width="16" height="8" fill="#ff4444" />
         <rect x="20" y="24" width="24" height="8" fill="#e0e0e0" />
         <rect x="28" y="28" width="8" height="4" fill="#64b5f6" />
         <rect x="20" y="32" width="24" height="8" fill="#e0e0e0" />
         <rect x="24" y="40" width="16" height="8" fill="#e0e0e0" />
         <rect x="16" y="40" width="8" height="8" fill="#ff8844" />
         <rect x="40" y="40" width="8" height="8" fill="#ff8844" />
         <rect x="12" y="48" width="8" height="8" fill="#bdbdbd" />
         <rect x="44" y="48" width="8" height="8" fill="#bdbdbd" />
         <rect x="8" y="56" width="8" height="8" fill="#757575" />
         <rect x="48" y="56" width="8" height="8" fill="#757575" />
      </svg>
   );
};
