import CommandLine from '../components/terminal/CommandLine';
import Cursor from '../components/terminal/Cursor';
import InfoGrid from '../components/terminal/InfoGrid';
import Terminal from '../components/terminal/Terminal';
import TerminalHeader from '../components/terminal/TerminalHeader';
import TerminalList from '../components/terminal/TerminalList';

import {
   certifications,
   contact,
   education,
   experience,
   profile,
   projects,
   skills,
} from '../data/portfolio';

export default function Home() {
   return (
      <main className="min-h-screen p-6 md:p-10">
         <Terminal>
            <TerminalHeader />

            <div className="p-6">
               <CommandLine command="whoami">
                  {profile.name} — {profile.bio}
               </CommandLine>

               <CommandLine command="echo $goal">{profile.goal}</CommandLine>

               <CommandLine command="cat skills.txt">
                  <TerminalList items={skills} />
               </CommandLine>

               <CommandLine command="cat experience.txt">
                  <TerminalList
                     items={experience.map((job) => (
                        <div>
                           <strong className="text-orange-300">
                              {job.title}
                           </strong>{' '}
                           @ {job.company} —{' '}
                           <span className="text-indigo-400 text-sm">
                              {job.date}
                           </span>
                           <br />
                           {job.description}
                        </div>
                     ))}
                  />
               </CommandLine>

               <CommandLine command="cat education.txt">
                  <TerminalList
                     items={[
                        ...education.map((edu) => (
                           <div>
                              <strong>{edu.degree}</strong> — {edu.school} (
                              {edu.year})
                              <br />
                              {edu.details}
                           </div>
                        )),
                        <div>
                           <strong>Certifications:</strong>{' '}
                           {certifications.join(', ')}
                        </div>,
                     ]}
                  />
               </CommandLine>

               <CommandLine command="ls projects/">
                  <TerminalList
                     items={projects.map((project) => (
                        <>
                           <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-pink-400 hover:underline"
                           >
                              {project.name}
                           </a>{' '}
                           — {project.description}
                        </>
                     ))}
                  />
               </CommandLine>

               <CommandLine command="contact --info">
                  <InfoGrid
                     rows={[
                        {
                           label: 'Email:',
                           value: (
                              <a
                                 href={`mailto:${contact.email}`}
                                 className="text-pink-400 hover:underline"
                              >
                                 {contact.email}
                              </a>
                           ),
                        },
                        {
                           label: 'GitHub:',
                           value: (
                              <a
                                 href={contact.github}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-pink-400 hover:underline"
                              >
                                 {contact.github.replace('https://', '')}
                              </a>
                           ),
                        },
                        {
                           label: 'LinkedIn:',
                           value: (
                              <a
                                 href={contact.linkedin}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="text-pink-400 hover:underline"
                              >
                                 {contact.linkedin.replace('https://', '')}
                              </a>
                           ),
                        },
                        {
                           label: 'Phone:',
                           value: contact.phone,
                        },
                     ]}
                  />
               </CommandLine>

               <hr className="border-zinc-800 my-6" />

               <CommandLine command="./help --available-commands">
                  <InfoGrid
                     cols="130px 1fr"
                     rows={[
                        { label: 'whoami', value: 'About me' },
                        {
                           label: 'echo $goal',
                           value: 'Current job search status',
                        },
                        { label: 'cat skills', value: 'View skills' },
                        {
                           label: 'cat experience',
                           value: 'View work experience',
                        },
                        { label: 'ls projects/', value: 'List projects' },
                        { label: 'contact --info', value: 'Contact details' },
                        { label: './help', value: 'Show command list' },
                     ]}
                  />
               </CommandLine>

               <div className="mt-8">
                  <span className="text-green-400">$</span>
                  <Cursor />
               </div>
            </div>
         </Terminal>
      </main>
   );
}
