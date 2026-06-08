import { memo } from 'react';

function Cursor({ offset = 0 }: { offset?: number }) {
   return (
      <span
         aria-hidden
         className="absolute inline-block w-2 h-4 bg-green-400 animate-blink"
         style={{ left: offset }}
      />
   );
}

export default memo(Cursor);
