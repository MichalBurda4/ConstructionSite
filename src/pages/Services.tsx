import React from "react";
import img1 from "../assets/images/services/img1.jpeg";
import img2 from "../assets/images/services/img2.jpg";
import img3 from "../assets/images/services/img3.jpg";
import img4 from "../assets/images/services/img4.webp";
import img5 from "../assets/images/services/img5.webp";
import img6 from "../assets/images/services/img6.webp";
import "./Services.css";

const services = [
    {
        title: "Przygotowanie inwestycji",
        description: "Kompleksowe planowanie i analiza inwestycji budowlanych.",
        image: img1
    },
    {
        title: "Kierownictwo budowy",
        description: "Profesjonalne zarządzanie i nadzór nad procesem budowlanym.",
        image: img2
    },
    {
        title: "Nadzór budowlany",
        description: "Kontrola zgodności realizacji inwestycji z obowiązującymi przepisami.",
        image: img3
    },
    {
        title: "Kontrole stanu technicznego",
        description: "Ocena stanu budynków i obiektów budowlanych pod kątem bezpieczeństwa.",
        image: img4
    },
    {
        title: "Prowadzenie ksiąg obiektów budowlanych",
        description: "Dokumentacja budowlana zarówno w formie tradycyjnej, jak i cyfrowej (c-KOB).",
        image: img5
    },
    {
        title: "Doradztwo w zakresie inwestycji wodno-kanalizacyjnych",
        description: "Wsparcie techniczne i prawne dla inwestycji w sektorze wodno-kanalizacyjnym.",
        image: img6
    }
];

const Services: React.FC = () => {
    return (
        <div className="services-container"> {/* Dodajemy odstęp od headera */}
            <h2>Zakres działalności</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <div className="service-info">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
