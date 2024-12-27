import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layout, Smartphone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { UseT } from '../context/LanguageContext';


const iconMap = {
  Globe,
  ShoppingCart,
  Layout,
  Smartphone
};

export default function Services() {
  const { translations } = UseT();
  const services = translations.services.items
  return (
    <section className="mt-10 w-[1150px] h-[1000px] flex justify-center xs:w-full xs:h-[calc(1000px-112px)] bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className=" mt-10 text-4xl font-bold text-center mb-12">{translations.services.title}</h2>
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
          className="flex justify-center items-center"
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
        className="flex justify-center items-center"
      >
        <div className="bg-gray-800 p-6 rounded-lg h-full text-center">
          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-400 mb-4">{service.description}</p>
          {IconComponent ? <IconComponent color="#2563EB" size={48} /> : null}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {service.button}
          </button>
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
