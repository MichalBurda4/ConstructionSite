import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import OwnerPhoto from "../assets/images/Owner.jpg"

const OwnerInfo: React.FC = () => {
    return (
        <div className="
            flex flex-col items-center
            text-center p-6
            bg-gray-100 rounded-lg shadow-md
            w-full max-w-sm
        ">
            {/* Zdjęcie właściciela */}
            <img
                src={OwnerPhoto}
                alt="Właściciel"
                className="w-36 h-36 rounded-full object-cover mb-4"
            />

            {/* Dane właściciela */}
            <h3 className="text-xl font-bold text-gray-700">Jacek Gil</h3>
            <p className="text-gray-600 mb-4">Właściciel Mgr Inż. Budownictwa</p>

            {/* Kontakt */}
            <div className="text-gray-700 text-sm space-y-1">
                <p className="flex items-center justify-center">
                    <FaPhone className="mr-2 text-grey-500" /> +48 664 761 968
                </p>
                <p className="flex items-center justify-center">
                    <FaEnvelope className="mr-2 text-grey-500" /> jacekgil@autograf.pl
                </p>
                <p>39-200 Dębica, ul. Cisowa 4</p>
                <p>NIP: 872-102-64-47</p>
                <p>REGON: 850069539</p>
            </div>
        </div>
    );
};

export default OwnerInfo;
