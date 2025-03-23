import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // Dodajemy ikonę edycji
import { FaLinkedin } from "react-icons/fa";

const AdminPanelHome: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState("Witaj na stronie Nadzoru Budowlanego! Edytuj ten tekst.");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        localStorage.setItem("homeText", content); // Zapisz do localStorage
    };

    const handleCancel = () => {
        setIsEditing(false);
        setContent(localStorage.getItem("homeText") || "Witaj na stronie Nadzoru Budowlanego! Edytuj ten tekst.");
    };

    return (
        <div className="bg-white text-gray-900 flex flex-col justify-between">
            {/* Główny kontener */}
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

                {/* Lewa kolumna - OwnerInfo */}
                <div className="lg:w-1/3">
                    <img src="path_to_owner_image" alt="Owner" className="w-48 h-48 rounded-full object-cover shadow-lg mb-6" />
                    <h1 className="text-3xl font-bold">Jacek Gil</h1>
                    <p className="text-lg text-gray-600">Właściciel</p>
                    <p className="text-lg text-gray-600">mgr Inż. Budownictwa</p>
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
                        <p className="leading-relaxed">{content}</p>
                        <button onClick={handleEdit} className="absolute top-2 right-4 bg-blue-500 text-white p-2 rounded-full">
                            <FaEdit />
                        </button>
                    </section>

                    {/* Skrócony opis właściciela */}
                    <section className="max-w-3xl mb-6">
                        <h3 className="text-2xl font-semibold mb-4">O właścicielu</h3>
                        <p className="leading-relaxed">
                            Jacek Gil – inżynier budownictwa z wieloletnim doświadczeniem w branży,
                            specjalizujący się w <strong>nadzorze inwestycji budowlanych</strong> oraz
                            doradztwie technicznym. Jego profesjonalizm i dbałość o detale gwarantują
                            najwyższą jakość świadczonych usług.
                        </p>
                    </section>

                    {/* Przyciski do podstron */}
                    <div className="flex gap-4">
                        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                            Zobacz nasze usługi
                        </button>
                        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition">
                            Więcej o właścicielu
                        </button>
                    </div>
                </div>
            </div>

            {/* 🏗️ Sekcja "Nasze Usługi" - w czerwonym polu */}
            <div className="container mx-auto px-4">
                <section className="max-w-8xl mx-auto mb-4">
                    <h3 className="text-2xl font-semibold text-center mb-6">Nasze usługi</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                        {/* Mapowanie i wyświetlanie usług */}
                    </div>
                </section>
            </div>

            {/* Sekcja LinkedIn na dole */}
            <div className="mt-4 mb-8 text-center">
                <h3 className="text-xl font-semibold text-gray-700 uppercase tracking-widest">Znajdź mnie na:</h3>
                <a href="https://www.linkedin.com/in/jacek-gil-223050144/" target="_blank" rel="noopener noreferrer">
                    <button className="w-16 h-16 flex items-center justify-center border-2 border-gray-400 rounded-full hover:bg-gray-100 transition">
                        <FaLinkedin className="text-gray-600 text-3xl" />
                    </button>
                </a>
            </div>

            {/* Modal edycji */}
            {isEditing && (
                <div className="modal absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h3 className="text-2xl font-semibold mb-4">Edytuj treść</h3>
                        <textarea
                            className="w-full h-48 p-4 border border-gray-300 rounded-lg"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">
                                Zapisz
                            </button>
                            <button onClick={handleCancel} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                                Anuluj
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanelHome;
