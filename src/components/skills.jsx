import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiExpress, 
  SiTailwindcss,
  SiGit
} from 'react-icons/si'
import { UseT } from '../context/LanguageContext';
const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' }
]

export default function Skills() {
  const {translations} = UseT();
  return (
    <section className="ml-20 md:ml-0 lg:ml-0 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-left mr-24 md:mr-0 lg:mr-0 text-4xl font-bold  lg:text-center mb-12">{translations.skills.title}</h2>
        <div className="ml-6 md:ml-0 lg:ml-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gray-900 w-96 md:w-60 lg:w-48 h-60 p-6 rounded-lg flex flex-col justify-center items-center">
                <skill.icon size={48} color={skill.color} className="mb-4" />
                <h3 className="text-lg font-medium">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

