import { MessageCircle } from 'lucide-react';

export default function ContactForm() {
   return (
      <div>
         <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-300">
            Send a Message
         </h3>

         <form className="space-y-4">
            <div>
               <label className="mb-2 block text-sm text-zinc-400">
                  Your Telegram Username (for reaching out to you)
               </label>

               <input
                  type="text"
                  placeholder="@yourusername"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500"
               />
            </div>

            <div>
               <label className="mb-2 block text-sm text-zinc-400">
                  Message
               </label>

               <textarea
                  rows={6}
                  dir="auto"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition focus:border-zinc-500"
               />
            </div>

            <button
               type="submit"
               className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:bg-gray-500"
               disabled
            >
               <MessageCircle size={16} />
               Send Message
            </button>
         </form>
      </div>
   );
}
