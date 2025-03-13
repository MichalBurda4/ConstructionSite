import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaIdBadge, FaLinkedin } from "react-icons/fa";
import ownerPhoto from "../assets/images/OwnerContact.webp"; // Zdjęcie właściciela

const Contact: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
            {/* Główna sekcja kontaktowa */}
            <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 items-center lg:items-start">

                {/* Zdjęcie właściciela po lewej stronie */}
                <div className="flex justify-center">
                    <img src={ownerPhoto} alt="Jacek Gil" className="w-152 h-auto rounded-lg object-cover shadow-lg" />
                </div>

                {/* Dane kontaktowe i mapa po prawej stronie */}
                <div className="flex flex-col space-y-6 w-full lg:w-2/3">
                    <h2 className="text-3xl font-bold mb-4">Skontaktuj się ze mną</h2>

                    {/* Informacje kontaktowe */}
                    <div className="text-lg space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
                        <p className="font-semibold text-xl text-gray-800">Biuro Inżynierskie mgr inż. Jacek Gil</p>

                        <p className="flex items-center text-gray-700">
                            <FaMapMarkerAlt className="text-gray-500 mr-3" />
                            39-200 Dębica, ul. Cisowa 4
                        </p>

                        <p className="flex items-center text-gray-700">
                            <FaPhoneAlt className="text-gray-500 mr-3" />
                            <a href="tel:+48664761968" className="text-blue-600 hover:underline">
                                +48 664 761 968
                            </a>
                        </p>

                        <p className="flex items-center text-gray-700">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <a href="mailto:jacekgil@autograf.pl" className="text-blue-600 hover:underline">
                                jacekgil@autograf.pl
                            </a>
                        </p>

                        <p className="flex items-center text-gray-700">
                            <FaIdBadge className="text-gray-500 mr-3" />
                            NIP: 872-102-64-47
                        </p>

                        <p className="flex items-center text-gray-700">
                            <FaIdBadge className="text-gray-500 mr-3" />
                            REGON: 850069539
                        </p>
                    </div>

                    {/* Mapa Google */}
                    <div className="w-full">
                        <iframe
                            title="Lokalizacja Biura"
                            width="100%"
                            height="350"
                            frameBorder="0"
                            className="rounded-lg shadow-md"
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.0525256452473!2d21.39862087612433!3d50.0426467715125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfbdc75a1d0b5%3A0x4e13bfcf7cce258e!2sCisowa%204%2C%2039-200%20D%C4%99bica!5e0!3m2!1spl!2spl!4v1710000000000"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>

            {/* Sekcja LinkedIn na dole */}
            <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold text-gray-700 uppercase tracking-widest">Znajdź mnie na:</h3>

                {/* Ikony social media w okręgach */}
                <div className="flex justify-center mt-6 space-x-6">
                    <a
                        href="https://www.linkedin.com/in/jacek-gil-223050144/"
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

export default Contact;
