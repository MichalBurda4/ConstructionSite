import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import OwnerInfo from "../components/OwnerInfo";

const Home: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen">
            {/* Główny kontener */}
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                {/* Lewa kolumna - OwnerInfo */}
                <div className="lg:w-1/3">
                    <OwnerInfo />
                </div>

                {/* Prawa kolumna - Treść strony */}
                <div className="lg:w-2/3">
                    {/* Nagłówek */}
                    <h2 className="text-3xl font-bold mb-6 text-center lg:text-left">
                        Witamy na stronie Nadzoru Budowlanego
                    </h2>

                    {/* Skrócony opis działalności */}
                    <section className="max-w-3xl mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Czym się zajmujemy?</h3>
                        <p className="leading-relaxed">
                            Świadczymy profesjonalne usługi w zakresie <strong>nadzoru budowlanego</strong>, <strong>kontroli stanu technicznego budynków</strong>
                            oraz <strong>prowadzenia dokumentacji budowlanej</strong>. Dzięki wieloletniemu doświadczeniu i rzetelności zapewniamy najwyższą jakość obsługi.
                        </p>
                    </section>

                    {/* Skrócony opis właściciela */}
                    <section className="max-w-3xl mb-6">
                        <h3 className="text-2xl font-semibold mb-4">O właścicielu</h3>
                        <p className="leading-relaxed">
                            Jacek Gil – inżynier budownictwa z wieloletnim doświadczeniem w branży, specjalizujący się w <strong>nadzorze inwestycji budowlanych</strong> oraz
                            doradztwie technicznym. Jego profesjonalizm i dbałość o detale gwarantują najwyższą jakość świadczonych usług.
                        </p>
                    </section>

                    {/* Przyciski do podstron */}
                    <div className="flex gap-4 mb-12">
                        <Link to="/services" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                            Zobacz nasze usługi
                        </Link>
                        <Link to="/AboutMe" className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition">
                            Więcej o właścicielu
                        </Link>
                    </div>
                </div>
            </div>

            {/* Sekcja LinkedIn na dole */}
            <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold text-gray-700 uppercase tracking-widest">Znajdź mnie na:</h3>

                {/* Ikona LinkedIn */}
                <div className="flex justify-center mt-6">
                    <a
                        href="https://www.linkedin.com/in/jacekgil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 flex items-center justify-center border-2 border-gray-400 rounded-full hover:bg-gray-100 transition"
                    >
                        <FaLinkedin className="text-gray-600 text-3xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
