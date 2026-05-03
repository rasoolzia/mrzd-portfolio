import Cursor from '../components/terminal/Cursor';
import PromptLine from '../components/terminal/PromptLine';
import Section from '../components/terminal/Section';
import Terminal from '../components/terminal/Terminal';
import TerminalHeader from '../components/terminal/TerminalHeader';

import { projects, skills } from '../data/portfolio';

export default function Home() {
   return (
      <div className="bg-[#0b0b0b] text-zinc-300 min-h-screen p-10 font-mono">
         <Terminal>
            <TerminalHeader />

            <div className="p-6">
               <PromptLine command="whoami" />

               <p className="my-2">
                  Alex Rivera — backend engineer focused on building reliable
                  systems and clean architecture.
               </p>

               <PromptLine command="cat skills.txt" />

               <Section>
                  <ul className="ml-5 space-y-1">
                     {skills.map((skill) => (
                        <li key={skill}>
                           <span className="text-green-400 mr-2">▸</span>
                           {skill}
                        </li>
                     ))}
                  </ul>
               </Section>

               <PromptLine command="ls projects/" />

               <Section>
                  <ul className="ml-5 space-y-1">
                     {projects.map((project) => (
                        <li key={project.name}>
                           <span className="text-green-400 mr-2">▸</span>

                           <a
                              href={project.url}
                              target="_blank"
                              className="text-pink-400 hover:underline"
                           >
                              {project.name}
                           </a>

                           {' — '}
                           {project.description}
                        </li>
                     ))}
                  </ul>
               </Section>

               <div className="mt-6">
                  <span className="text-green-400">$</span>
                  <Cursor />
               </div>
            </div>
         </Terminal>
      </div>
   );
}
