import React, { useState } from "react";

const AdminPanel: React.FC = () => {
    const [pageContent, setPageContent] = useState({
        homeText: "",
        aboutMeText: "",
    });

    // Pobierz treści z localStorage po załadowaniu strony
    React.useEffect(() => {
        const savedHomeText = localStorage.getItem("homeText") || "";
        const savedAboutMeText = localStorage.getItem("aboutMeText") || "";

        setPageContent({
            homeText: savedHomeText,
            aboutMeText: savedAboutMeText,
        });
    }, []);

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>, page: string) => {
        setPageContent((prev) => ({
            ...prev,
            [page]: e.target.value,
        }));
    };

    const handleSaveChanges = () => {
        // Zapisz treści w localStorage
        localStorage.setItem("homeText", pageContent.homeText);
        localStorage.setItem("aboutMeText", pageContent.aboutMeText);
        alert("Zapisano zmiany!");
    };

    return (
        <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
            <h2 className="text-3xl font-bold mb-6">Panel Administratora</h2>

            <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Edycja treści strony głównej</h3>
                <textarea
                    value={pageContent.homeText}
                    onChange={(e) => handleContentChange(e, "homeText")}
                    className="w-full p-3 border rounded-lg h-32 mb-6"
                    placeholder="Edytuj tekst strony głównej..."
                />
            </div>

            <div className="w-full max-w-2xl bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4">Edycja treści o mnie</h3>
                <textarea
                    value={pageContent.aboutMeText}
                    onChange={(e) => handleContentChange(e, "aboutMeText")}
                    className="w-full p-3 border rounded-lg h-32 mb-6"
                    placeholder="Edytuj tekst o właścicielu..."
                />
            </div>

            <button
                onClick={handleSaveChanges}
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
                Zapisz zmiany
            </button>
        </div>
    );
};

export default AdminPanel;
