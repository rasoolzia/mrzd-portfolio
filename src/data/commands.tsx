import InfoGrid from '@/components/terminal/InfoGrid';
import TerminalList from '@/components/terminal/TerminalList';
import {
   certifications,
   contact,
   education,
   experience,
   profile,
   projects,
   skills,
} from './portfolio';

type CommandHandler = (args?: string[]) => React.ReactNode;

// Files are only readable via `cat`
const FILES: Record<string, () => React.ReactNode> = {
   'about.txt': () => <div>{profile.bio}</div>,

   'skills.txt': () => <TerminalList items={skills} />,

   'experience.txt': () => (
      <TerminalList
         items={experience.map((job) => (
            <div>
               <strong>{job.title}</strong> @ {job.company}
               <div className="text-zinc-400 text-sm">{job.date}</div>
               {job.description}
            </div>
         ))}
      />
   ),

   'education.txt': () => (
      <TerminalList
         items={[
            ...education.map((edu) => (
               <div>
                  <strong>{edu.degree}</strong> — {edu.school} ({edu.year})
                  <div>{edu.details}</div>
               </div>
            )),
            <div>
               <strong>Certifications:</strong> {certifications.join(', ')}
            </div>,
         ]}
      />
   ),

   'projects.txt': () => (
      <TerminalList
         items={projects.map((p) => (
            <>
               <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:underline"
               >
                  {p.name}
               </a>{' '}
               — {p.description}
            </>
         ))}
      />
   ),

   'contact.txt': () => (
      <InfoGrid
         rows={[
            { label: 'Email:', value: contact.email },
            { label: 'GitHub:', value: contact.github },
            { label: 'LinkedIn:', value: contact.linkedin },
            { label: 'Phone:', value: contact.phone },
         ]}
      />
   ),
};

export const FILE_NAMES = Object.keys(FILES);

export function getCommands(): Record<string, CommandHandler> {
   return {
      help: () => (
         <InfoGrid
            cols="130px 1fr"
            rows={[
               { label: 'whoami', value: 'Who am I' },
               { label: 'ls', value: 'List files' },
               { label: 'cat <file>', value: 'Read a file' },
               { label: 'clear', value: 'Clear terminal' },
               { label: 'exit', value: 'Exit terminal' },
            ]}
         />
      ),

      whoami: () => (
         <div>
            <div className="text-orange-300">{profile.name}</div>
            <div className="text-zinc-400 mt-1">{profile.goal}</div>
         </div>
      ),

      ls: () => (
         <div className="flex flex-wrap gap-x-4 gap-y-1">
            {Object.keys(FILES).map((f) => (
               <span key={f} className="text-blue-400">
                  {f}
               </span>
            ))}
         </div>
      ),

      cat: (args) => {
         const filename = args?.[0];
         if (!filename) return 'Usage: cat <file>';
         // accept both "about" and "about.txt"
         const key = filename.endsWith('.txt') ? filename : `${filename}.txt`;
         const render = FILES[key];
         if (!render) return `cat: ${filename}: No such file or directory`;
         return render();
      },
   };
}
