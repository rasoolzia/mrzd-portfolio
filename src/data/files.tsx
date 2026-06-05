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

type FileRenderer = () => React.ReactNode;

function file(name: string, render: FileRenderer): [string, FileRenderer] {
   return [`${name}.txt`, render];
}

export const FILES = Object.fromEntries([
   file('about', () => <div>{profile.bio}</div>),
   file('skills', () => <TerminalList items={skills} />),
   file('experience', () => (
      <TerminalList
         items={experience.map((job) => (
            <div>
               <strong>{job.title}</strong> @ {job.company}
               <div className="text-zinc-400 text-sm">{job.date}</div>
               {job.description}
            </div>
         ))}
      />
   )),
   file('education', () => (
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
   )),
   file('projects', () => (
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
   )),
   file('contact', () => (
      <InfoGrid
         rows={[
            { label: 'Email:', value: contact.email },
            { label: 'GitHub:', value: contact.github },
            { label: 'LinkedIn:', value: contact.linkedin },
            { label: 'Phone:', value: contact.phone },
         ]}
      />
   )),
]);

export const FILE_NAMES = Object.keys(FILES);
