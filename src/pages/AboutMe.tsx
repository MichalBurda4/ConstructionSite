import React from "react";
import OwnerPhoto from "../assets/images/Owner.jpg";
const achievements = [
    {
        title: "Właściciel",
        companies: [
            { name: "Biuro Inżynierskie mgr inż. Jacek Gil - Dębica", years: "01/2025 - obecnie" },
            { name: "Biuro Inżynierskie Jacek Gil - Dębica", years: "03/1992 - 02/2007" }
        ]
    },
    {
        title: "Prezes Zarządu",
        companies: [
            { name: "Wodociągi Dębickie sp. z o.o.", years: "02/2007 - 07/2024" },
            { name: "Wodociągi Dębickie sp. z o.o.", years: "06/1996 - 10/1998" }
        ]
    },
    {
        title: "Zastępca Burmistrza Miasta",
        companies: [
            { name: "Urząd Miejski w Dębicy", years: "10/1998 - 11/2002" }
        ]
    },
    {
        title: "Kierownik kontraktów",
        companies: [
            { name: "Niemcy Wrobud sp. z o.o.", years: "02/1995 - 12/1995" }
        ]
    },
    {
        title: "Inspektor nadzoru",
        companies: [
            { name: "Nie podano firmy", years: "Brak danych" }
        ]
    },
    {
        title: "Kierownik budowy",
        companies: [
            { name: "Przedsiębiorstwo Produkcyjno Usługowe Solbud", years: "07/1991 - 02/1992" }
        ]
    }
];




const AboutMe: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
            {/* Kontener dla sekcji */}
            <div className="max-w-4xl w-full flex flex-col items-center text-center">

                {/* Zdjęcie właściciela */}
                <img
                    src={OwnerPhoto}
                    alt="Jacek Gil"
                    className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
                />

                {/* Imię, nazwisko i tytuł */}
                <h1 className="text-3xl font-bold">Jacek Gil</h1>
                <p className="text-lg text-gray-600">Właściciel</p>
                <p className="text-lg text-gray-600">mgr Inż. Budownictwa</p>

                {/* Opis właściciela */}
                <p className="mt-6 text-lg leading-relaxed max-w-3xl">
                    Doświadczony manager i ekspert w branży budowlanej oraz wodociągowej.
                    Posiada wieloletnie doświadczenie w zarządzaniu przedsiębiorstwami oraz
                    realizacji inwestycji budowlanych. Były Prezes Zarządu Wodociągów Dębickich
                    oraz Wiceprzewodniczący Podkarpackiej Okręgowej Izby Inżynierów Budownictwa.
                </p>
            </div>

            {/* Najważniejsze osiągnięcia */}
            <div className="mt-12 w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-center mb-6">Najważniejsze osiągnięcia</h2>

                {/* Kafelki z doświadczeniem */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-semibold">{achievement.title}</h3>
                            {achievement.companies.map((company, idx) => (
                                <div key={idx} className="mt-2">
                                    <p className="text-gray-600">{company.name}</p>
                                    <p className="text-gray-500 text-sm">{company.years}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AboutMe;
