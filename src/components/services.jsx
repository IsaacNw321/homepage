import { motion } from 'framer-motion';
import { Globe, Layout, Smartphone, Headphones, BriefcaseBusiness } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { UseT } from '../context/LanguageContext';

const iconMap = {
  Globe,
  Layout,
  Smartphone,
  BriefcaseBusiness,
  Headphones
};

export default function Services() {
  const { translations, language } = UseT();
  const services = translations.services.items;
  const cvFile = language === 'es' ? '../cvs/cves.pdf' : '../cvs/cven.pdf'; 

  return (
    <section className="w-72 mt-10 h-auto md:w-auto md:h-auto flex justify-center lg:w-full lg:h-auto bg-transparent md:bg-gray-900 lg:bg-gray-900">
      <div className="max-w-6xl mx-auto h-auto">
        <h2 className="mt-10 text-4xl font-bold text-center mb-12">{translations.services.title}</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          className="flex flex-col lg:flex-row justify-center items-center"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            if (!IconComponent) {
              console.error(`Icon for ${service.icon} not found`);
            }
            return (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex justify-center items-center h-auto"
                >
                  <div className="bg-gray-800 p-6 ml-8 md:ml-0 lg:ml-0 rounded-lg h-90 lg:h-auto w-80 lg:w-96 text-center">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    {IconComponent ? <IconComponent color="#2563EB" size={48} /> : null}
                    {service.link ? (
                      <a 
                        href={service.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        {service.button}
                      </a>
                    ) : service.download ? (
                      <a 
                        href={cvFile} 
                        download 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        {service.button}
                      </a>
                    ) : null}
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}