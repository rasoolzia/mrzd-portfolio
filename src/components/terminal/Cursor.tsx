import { memo } from 'react';

function Cursor({ offset = 0 }: { offset?: number }) {
   return (
      <span
         aria-hidden
         className="inline-block w-2 h-4 bg-green-400 animate-blink absolute"
         style={{ left: offset }}
      />
   );
}

export default memo(Cursor);
