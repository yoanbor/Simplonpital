import React from 'react';

const Card = ({ bed }) => {
    console.log(bed.room)
    return (
        <li className="card">
            <h3>{bed.patient ? bed.patient.firstName : ""}</h3>
            <h3>{bed.patient ? bed.patient.lastName : ""}</h3>
            <p>{bed.patient ? bed.patient.birthdate : ""}</p>
            <p>{bed.patient ? bed.patient.socialSecurityNumber : ""}</p>
            <h3>{bed.patient ? "Service" : ""}</h3>
            <p>{bed.patient ? bed.room.service.name : ""}</p>
            <h3>{bed.patient ? "Chambre" : ""}</h3>
            <p>{bed.patient ? bed.room.number : ""}</p>
        </li>
    );
};

export default Card;
