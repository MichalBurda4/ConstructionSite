import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaIdBadge, FaLinkedin } from "react-icons/fa";
import ownerPhoto from "../assets/images/Owner.jpg"; // Zdjęcie właściciela

const Contact: React.FC = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // tutaj można zaimplementować wysyłanie formularza do backendu lub na e-mail
        alert("Wiadomość została wysłana");
        // Reset form
        setEmail("");
        setPhone("");
        setMessage("");
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
            {/* Nagłówek */}
            <h2 className="text-3xl font-bold mb-4 text-center">Skontaktuj się ze mną</h2>

            {/* Zdjęcie właściciela */}
            <div className="flex justify-center mb-6">
                <img src={ownerPhoto} alt="Jacek Gil" className="w-48 h-48 rounded-full object-cover shadow-lg" />
            </div>

            {/* Dane kontaktowe */}
            <div className="text-lg space-y-4 bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-2xl mb-8">
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

            {/* Formularz kontaktowy */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-12 space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-center">Formularz kontaktowy</h3>

                <div className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Twój e-mail"
                        className="p-3 border rounded-lg w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Twój numer telefonu"
                        className="p-3 border rounded-lg w-full"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Treść wiadomości"
                        className="p-3 border rounded-lg w-full h-32"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Wyślij wiadomość
                </button>
            </form>

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
