import avatar from '../images/avatar2.png';
import { UseT } from '../context/LanguageContext';

export default function Hero() {
  const {translations, switchLanguage, language} = UseT();
  const onClick = () => {
    switchLanguage(language === 'en' ? 'es' : 'en');
  }
  return (
    <section
  className="w-72 h-full md:w-auto md:h-96 flex justify-center lg:w-full lg:h-[calc(100vh-112px)]"
  style={{
    backgroundImage: `url(${avatar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 112px)',
  }}
>
  <div className=" w-72 md:w-auto lg:w-full relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="flex justify-center items-center text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 h-48">
      {translations.hero.title}
    </h1>
    <p className="text-3xl md:text-2xl mb-8 text-gray-300 max-w-2xl h-32 ">
      {translations.hero.description}
    </p>
    <button
      onClick={onClick}
      className=" mb-24 md:mb-0 lg:mb-0 bg-blue-600 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded text-base sm:text-lg"
    >
      {translations.hero.buttonC}
    </button>
  </div>
</section>
  );
}