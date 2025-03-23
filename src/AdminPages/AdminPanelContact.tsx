import React, { useState } from "react";

const AdminPanelContact: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState("Formularz kontaktowy... Edytuj ten tekst.");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        localStorage.setItem("contactText", content); // Zapisz do localStorage
    };

    const handleCancel = () => {
        setIsEditing(false);
        setContent(localStorage.getItem("contactText") || "Formularz kontaktowy... Edytuj ten tekst.");
    };

    return (
        <div>
            <h2>Kontakt - Admin Panel</h2>
            <div className="content">
                <p>{content}</p>
                <button onClick={handleEdit} className="edit-button">Edytuj</button>
            </div>

            {isEditing && (
                <div className="modal">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={4}
                        cols={50}
                    ></textarea>
                    <div>
                        <button onClick={handleSave}>Zapisz</button>
                        <button onClick={handleCancel}>Anuluj</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanelContact;
