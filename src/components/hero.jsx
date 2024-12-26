import avatar from '../images/avatar2.png';
import { UseT } from '../context/LanguageContext';

export default function Hero() {
  const {translations, switchLanguage, language} = UseT();
  const onClick = () => {
    switchLanguage(language === 'en' ? 'es' : 'en');
  }
  return (
    <section
  className="h-screen relative"
  style={{
    backgroundImage: `url(${avatar})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
      {translations.hero.title}
    </h1>
    <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl">
      {translations.hero.description}
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base sm:text-lg">
      {translations.hero.button}
    </button>
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 mt-6 text-white font-bold py-2 px-4 rounded text-base sm:text-lg"
    >
      {translations.hero.buttonC}
    </button>
  </div>
</section>
  );
}