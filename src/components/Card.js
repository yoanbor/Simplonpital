import React from 'react';

const Card = ({ bed }) => {
    return (
        <>
            {bed.patient && (
                <li className="card">
                    <div className="card-patient">
                        <div className="card-nom-prenom">
                            <h3>{bed.patient.firstName}</h3>
                            <h3>{bed.patient.lastName}</h3>
                        </div>
                        <p>{bed.patient.birthdate}</p>
                        <p>{bed.patient.socialSecurityNumber}</p>
                    </div>
                    <div className="card-service-chambre">
                        <div className="card-service">
                            <h3>Service</h3>
                            <p>{bed.room.service.name}</p>
                        </div>
                        <div className="card-chambre">
                            <h3>Chambre</h3>
                            <p>{bed.room.number}</p>
                        </div>
                    </div>
                </li>
            )}
        </>
    );
};

export default Card;
