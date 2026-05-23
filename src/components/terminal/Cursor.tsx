import { memo } from 'react';

function Cursor() {
   return (
      <span
         aria-hidden
         className="inline-block w-2 h-4 ml-1 bg-green-400 animate-blink"
      />
   );
}

export default memo(Cursor);
