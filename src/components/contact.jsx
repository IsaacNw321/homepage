import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { UseT } from '../context/LanguageContext'

export default function Contact() {
  const {translations} = UseT();
  return (
    <section className="w-72 md:w-auto lg:w-auto py-20 px-4 bg-transparent md:bg-gray-900 lg:bg-gray-900">
      <div className="w-72 md:w-auto lg:w-auto max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className=" mt-10 text-4xl font-bold text-center mb-12">{translations.contact.title}</h2>
          <div className=" grid md:grid-cols-2 gap-12">
            <div className="w-72 md:w-auto lg:w-auto bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">{translations.contact.information.title}</h3>
              <div className="space-y-4">
              <div className="flex items-center gap-4">
               <Phone className="w-5 h-5 text-blue-500" />
                   <p className="flex items-center text-blue-500 text-base">+58 416 257-2870</p>
                 </div>
                 <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-blue-500" />
                    <p className="flex items-center text-blue-500 text-sm">isaac.pereira.50159@gmail.com</p>
                   </div>
                <div className="flex items-center gap-4">
                  <Github className="w-5 h-5 text-blue-500" />
                  <a href="https://github.com/yourusername" className="hover:text-blue-500">
                  {translations.contact.information.github}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <a href="https://linkedin.com/in/isaac-pereira-271a65265" className="hover:text-blue-500">
                  {translations.contact.information.linkedin}
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder={translations.contact.form.namePlaceholder} 
                    className="w-full p-2 bg-gray-700 rounded"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder={translations.contact.form.emailPlaceholder}  
                    className="w-full p-2 bg-gray-700 rounded"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder={translations.contact.form.subjectPlaceholder}   
                    className="w-full p-2 bg-gray-700 rounded"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder={translations.contact.form.messagePlaceholder} 
                    className="w-full p-2 bg-gray-700 rounded min-h-[150px]"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {translations.contact.form.button}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

