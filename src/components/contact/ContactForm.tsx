import FormInput from '@/components/common/FormInput';
import FormTextarea from '@/components/common/FormTextarea';
import { getHref } from '@/helper/getHref';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const API_URL = getHref('bot', 'send.php');
const API_TOKEN = import.meta.env.VITE_PUBLIC_API_TOKEN;

export default function ContactForm() {
   const [username, setUsername] = useState('');
   const [message, setMessage] = useState('');
   const [status, setStatus] = useState<
      'idle' | 'loading' | 'success' | 'error'
   >('idle');
   const [responseMsg, setResponseMsg] = useState('');

   const isValid = username.trim().length > 0 && message.trim().length > 0;

   async function handleSubmit(e: React.SubmitEvent) {
      e.preventDefault();
      if (!isValid) return;

      setStatus('loading');
      setResponseMsg('');

      const text = `📬 New portfolio message\n\nFrom: ${username.trim()}\n\n${message.trim()}`;

      try {
         const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({ action: 'api', text }),
         });

         const data = await res.json();

         if (!res.ok || !data.success) {
            throw new Error(data.error ?? 'Something went wrong');
         }

         setStatus('success');
         setMessage('');
         setResponseMsg(data.message ?? 'Message sent successfully.');
      } catch (err) {
         setStatus('error');
         setResponseMsg(err instanceof Error ? err.message : 'Unknown error');
      }
   }

   return (
      <div>
         <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-zinc-300">
            Send a Message
         </h3>

         <form className="space-y-4" onSubmit={handleSubmit}>
            <FormInput
               label="Your Telegram Username (for reaching out to you)"
               type="text"
               placeholder="@yourusername"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />

            <FormTextarea
               label="Message"
               rows={6}
               dir="auto"
               placeholder="Write your message..."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />

            <button
               type="submit"
               disabled={!isValid || status === 'loading'}
               className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
               <MessageCircle size={16} />
               {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
               <p className="text-sm text-red-400">{responseMsg}</p>
            )}

            {status === 'success' && (
               <p className="text-sm text-green-400">
                  Message sent successfully.
               </p>
            )}
         </form>
      </div>
   );
}
