import InfoGrid from '../components/terminal/InfoGrid';
import TerminalList from '../components/terminal/TerminalList';
import {
   certifications,
   contact,
   education,
   experience,
   profile,
   projects,
   skills,
} from './portfolio';

export function getCommands() {
   return {
      help: () => (
         <InfoGrid
            cols="130px 1fr"
            rows={[
               { label: 'whoami', value: 'About me' },
               { label: 'skills', value: 'List skills' },
               { label: 'experience', value: 'Work history' },
               { label: 'education', value: 'Education info' },
               { label: 'projects', value: 'View projects' },
               { label: 'contact', value: 'Contact information' },
               { label: 'clear', value: 'Clear terminal' },
            ]}
         />
      ),

      whoami: () => (
         <div>
            <div className="text-orange-300">{profile.name}</div>
            <div>{profile.bio}</div>
            <div className="text-zinc-400 mt-1">{profile.goal}</div>
         </div>
      ),

      skills: () => <TerminalList items={skills} />,

      experience: () => (
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

      education: () => (
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

      projects: () => (
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

      contact: () => (
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
}
