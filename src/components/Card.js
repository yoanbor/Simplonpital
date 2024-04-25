import React, { useState } from 'react';
import axios from "axios";

const Card = ({ bed }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthdate: "",
        socialSecurityNumber: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`https://api-ecf.sarahkatz.fr/patients/`, formData);
            console.log('Patient updated successfully:', response.data);

            // Désactive le mode édition
            setIsEditing(false);
        } catch (error) {
            console.error('Erreur lors de la modification du patient:', error);
        }
    };

    return (
        <>
            {bed.patient && (
                <li className="card">
                    <div className="card-patient">
                        {isEditing && <h3>Patient</h3>}

                        <div className="card-nom-prenom">
                            {isEditing ? (
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={bed.patient.firstName} />
                            ) : (
                                <h3>{bed.patient.firstName}</h3>
                            )}
                            {isEditing ? (
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={bed.patient.lastName} />
                            ) : (
                                <h3>{bed.patient.lastName}</h3>
                            )}
                        </div>
                        {isEditing ? (
                            <input type="text" name="birthdate" value={formData.birthdate} onChange={handleChange} placeholder={bed.patient.birthdate} />
                        ) : (
                            <p>{bed.patient.birthdate}</p>
                        )}
                        {isEditing ? (
                            <input type="text" name="socialSecurityNumber" value={formData.socialSecurityNumber} onChange={handleChange} placeholder={bed.patient.socialSecurityNumber} />
                        ) : (
                            <p>{bed.patient.socialSecurityNumber}</p>
                        )}
                    </div>

                    <div className="card-service">
                        <h3>Service</h3>
                        <p>{bed.room.service.name}</p>
                    </div>

                    <div className="card-chambre">
                        <h3>Chambre</h3>
                        <p>{bed.room.number}</p>
                    </div>

                    <div className="card-button">
                        {isEditing && <button id="Annuler" onClick={() => setIsEditing(false)}>Annuler</button>}
                        {isEditing ? (
                            <button id="Valider" onClick={handleSubmit}>Valider</button>
                        ) : (
                            <button id="Modifier" onClick={() => setIsEditing(true)}>Modifier</button>
                        )}
                    </div>
                </li>
            )}
        </>
    );
};

export default Card;
