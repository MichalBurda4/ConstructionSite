import React from "react";
import { Link } from "react-router-dom";
import OwnerInfo from "../components/OwnerInfo";
import { FaLinkedin, FaBuilding, FaSearch, FaClipboardList, FaComments } from "react-icons/fa";



// Dane do sekcji "Nasze Usługi"
const services = [
    { title: "Nadzór inwestorski", icon: <FaBuilding className="text-grey-500 text-3xl" /> },
    { title: "Kontrole techniczne", icon: <FaSearch className="text-grey-500 text-3xl" /> },
    { title: "Dokumentacja obiektów", icon: <FaClipboardList className="text-grey-500 text-3xl" /> },
    { title: "Doradztwo techniczne", icon: <FaComments className="text-grey-500 text-3xl" /> }
];

const Home: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 flex flex-col justify-between">
            {/* Główny kontener */}
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">


                {/* Lewa kolumna - OwnerInfo */}
                <div className="lg:w-1/3">
                    <OwnerInfo/>
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
                            Świadczymy profesjonalne usługi&nbsp;w&nbsp;zakresie <strong>nadzoru budowlanego</strong>,
                            <strong> kontroli stanu technicznego budynków</strong> oraz
                            <strong> prowadzenia dokumentacji budowlanej</strong>. Dzięki wieloletniemu doświadczeniu&nbsp;
                            i&nbsp;rzetelności zapewniamy najwyższą jakość obsługi.
                        </p>
                    </section>

                    {/* Skrócony opis właściciela */}
                    <section className="max-w-3xl mb-6">
                        <h3 className="text-2xl font-semibold mb-4">O właścicielu</h3>
                        <p className="leading-relaxed">
                            Jacek Gil – inżynier budownictwa&nbsp;z&nbsp;wieloletnim doświadczeniem w branży,
                            specjalizujący się&nbsp;w&nbsp;<strong>nadzorze inwestycji budowlanych</strong> oraz
                            specjalizujący się&nbsp;w&nbsp;<strong>nadzorze inwestycji budowlanych</strong> oraz
                            doradztwie technicznym. Jego profesjonalizm&nbsp;i&nbsp;dbałość o detale gwarantują
                            najwyższą jakość świadczonych usług.
                        </p>
                    </section>

                    {/* Przyciski do podstron */}
                    <div className="flex gap-4">
                        <Link to="/services"
                              className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                            Zobacz nasze usługi
                        </Link>
                        <Link to="/AboutMe"
                              className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition">
                            Więcej o właścicielu
                        </Link>
                    </div>
                </div>
            </div>


            {/* 🏗️ Sekcja "Nasze Usługi" - w czerwonym polu */}
            <div className="container mx-auto px-4">
                <section className="max-w-8xl mx-auto mb-4">
                    <h3 className="text-2xl font-semibold text-center mb-6">Nasze usługi</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                                {service.icon}
                                <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </div>



            {/* Sekcja LinkedIn na dole */}
            <div className="mt-4 mb-8 text-center">
                <h3 className="text-xl font-semibold text-gray-700 uppercase tracking-widest">Znajdź mnie na:</h3>

                {/* Ikona LinkedIn */}
                <div className="flex justify-center mt-4">
                    <a
                        href="https://www.linkedin.com/in/jacek-gil-223050144/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center border-2 border-gray-400 rounded-full hover:bg-gray-100 transition"
                    >
                        <FaLinkedin className="text-gray-600 text-3xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
