import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaIdBadge,
    FaLinkedin,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import ownerPhoto from "../assets/images/Owner.jpg";
import contactBg from "../assets/images/contact.jpg";

const Contact: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const currentTime = new Date().toLocaleString("pl-PL", {
            dateStyle: "medium",
            timeStyle: "short",
        });

        emailjs
            .send(
                "service_egbkyrl",
                "template_fs61gx5",
                {
                    from_name: name,
                    from_email: email,
                    phone: phone,
                    message: message,
                    time: currentTime,
                },
                "zTCJ6amcfL3iJIk3p"
            )
            .then(() => {
                alert("Wiadomość została wysłana!");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Błąd:", error);
                alert("Wystąpił błąd. Spróbuj ponownie później.");
            });
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen text-white">
            {/* Lewa strona z tłem i informacjami kontaktowymi */}
            <div
                className="md:w-1/2 flex flex-col justify-center items-center text-white px-8 py-12 relative"
                style={{
                    backgroundImage: `url(${contactBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <img
                        src={ownerPhoto}
                        alt="Jacek Gil"
                        className="w-56 h-56 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <h2 className="text-4xl font-bold">Jacek Gil</h2>
                    <p className="text-lg text-gray-300 font-medium">
                        Właściciel Biura Inżynierskiego
                    </p>
                    <p className="text-base text-gray-300 max-w-md mt-2">
                        Masz pytania dotyczące nadzoru budowlanego, dokumentacji technicznej
                        lub inwestycji? Zadzwoń lub napisz – z przyjemnością udzielę informacji
                        i pomogę!
                    </p>

                    <div className="text-lg space-y-2 mt-6 font-medium">
                        <p className="flex items-center gap-2"><FaPhoneAlt /> +48 664 761 968</p>
                        <p className="flex items-center gap-2"><FaEnvelope /> jacekgil@autograf.pl</p>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt /> 39-200 Dębica, ul. Cisowa 4</p>
                        <p className="flex items-center gap-2"><FaIdBadge /> NIP: 872-102-64-47</p>
                        <p className="flex items-center gap-2"><FaIdBadge /> REGON: 850069539</p>
                    </div>
                </div>
            </div>

            {/* Prawa strona - formularz */}
            <div className="md:w-1/2 bg-[#1f1f1f] p-10 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Skontaktuj się ze mną</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Imię i nazwisko</label>
                        <input
                            type="text"
                            className="bg-[#2a2a2a] text-white p-3 rounded-lg"
                            placeholder="Jan Kowalski"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-1">E-mail</label>
                        <input
                            type="email"
                            className="bg-[#2a2a2a] text-white p-3 rounded-lg"
                            placeholder="jan@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Telefon</label>
                        <input
                            type="tel"
                            className="bg-[#2a2a2a] text-white p-3 rounded-lg"
                            placeholder="+48 123 456 789"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm mb-1">Wiadomość</label>
                        <textarea
                            className="bg-[#2a2a2a] text-white p-3 rounded-lg h-32 resize-none"
                            placeholder="Treść wiadomości..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
                    >
                        Wyślij wiadomość
                    </button>
                </form>

                {/* LinkedIn */}
                <div className="mt-12 text-center">
                    <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-widest mb-4">Znajdź mnie na:</h3>
                    <a
                        href="https://www.linkedin.com/in/jacek-gil-223050144/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center border-2 border-gray-400 rounded-full hover:bg-gray-100 transition mx-auto"
                    >
                        <FaLinkedin className="text-white text-2xl" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
