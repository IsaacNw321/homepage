import { motion } from 'framer-motion';
import { UseT } from '../context/LanguageContext';
export default function About() {
  const {translations} = UseT();
  return (
    <section className="py-8 px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="w-full max-w-3xl">
            <h2 className="text-4xl font-bold mb-6 text-center">{translations.about.title}</h2>
            <div className="bg-gray-900 p-6 rounded-lg flex flex-col items-center gap-4">
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