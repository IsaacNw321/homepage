import { motion } from 'framer-motion';
import { UseT } from '../context/LanguageContext';
export default function About() {
  const {translations} = UseT();
  return (
    <section className="ml-8 w-2/5 mt-10 h-max md:w-auto md:h-6 flex justify-center lg:w-full lg:h-[calc(100vh-112px)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="w-2/5 max-w-3xl mr-24 md:mr-0 lg:mr-0 md:w-full lg:w-full">
            <h2 className="ml-32 md:ml-0 lg:ml-0 text-4xl font-bold mb-6 text-center">{translations.about.title}</h2>
            <div className="bg-gray-900 w-96 lg:w-auto p-6 rounded-lg flex flex-col items-center gap-4">
              <p className="text-gray-300 mb-4 text-center">
                {translations.about.paragraphs.slice(0, 1).join(' ')}
              </p>
              <p className="text-gray-300 mb-4 text-center">
              {translations.about.paragraphs.slice(1, 2).join(' ')}
              </p>
              <p className="text-gray-300 text-center">
              {translations.about.paragraphs.slice(2, 3).join(' ')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}