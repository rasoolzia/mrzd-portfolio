import FormInput from '@/components/common/FormInput';
import FormTextarea from '@/components/common/FormTextarea';
import { getHref } from '@/helper/getHref';
import { fetchApi } from '@/utils/fetchApi';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '../common/Button';

const API_URL = getHref('bot', 'send-message/');

function normalizeContact(value: string): string {
   const trimmed = value.trim();
   if (!trimmed) return trimmed;
   const isStartWithAt = trimmed.startsWith('@');

   // if it contains @ not at the start, treat as email
   if (trimmed.includes('@') && !isStartWithAt) return trimmed;

   // otherwise treat as Telegram username
   return isStartWithAt ? trimmed : `@${trimmed}`;
}

export default function ContactForm() {
   const [contact, setContact] = useState('');
   const [message, setMessage] = useState('');
   const [status, setStatus] = useState<
      'idle' | 'loading' | 'success' | 'error'
   >('idle');
   const [responseMsg, setResponseMsg] = useState('');

   const isValid = contact.trim().length > 0 && message.trim().length > 0;

   async function handleSubmit(e: React.SubmitEvent) {
      e.preventDefault();
      if (!isValid) return;

      setStatus('loading');
      setResponseMsg('');

      const normalizedUsername = normalizeContact(contact);
      const text = `📬 New portfolio message\n\nFrom: ${normalizedUsername}\n\n${message.trim()}`;

      try {
         const data = await fetchApi<{ message: string }>(API_URL, {
            method: 'POST',
            body: { action: 'api', text },
         });

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
               label="Your Telegram ID or Email (for reaching out to you)"
               type="text"
               placeholder="@username/email"
               value={contact}
               onChange={(e) => setContact(e.target.value)}
               disabled={status === 'loading'}
            />

            <FormTextarea
               label="Message"
               rows={6}
               dir="auto"
               placeholder="Write your message..."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               disabled={status === 'loading'}
            />

            <Button
               loading={status === 'loading'}
               loadingText="Sending..."
               type="submit"
               disabled={!isValid || status === 'loading'}
               prependIcon={MessageCircle}
            >
               Send Message
            </Button>

            {responseMsg && (
               <p
                  className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
               >
                  {responseMsg}
               </p>
            )}
         </form>
      </div>
   );
}
