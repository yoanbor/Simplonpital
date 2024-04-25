import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card";

const Patients = () => {
    const [dataBed, setDataBed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://api-ecf.sarahkatz.fr/beds');
            setDataBed(response.data);
            setLoading(false)
        } catch (error) {
            setError("Une erreur s'est produite lors du chargement des données des patients. Veuillez réessayer plus tard.");
            setLoading(false);
        }
    };

    const handleEdit = (patientId, newData) => {
        axios.put(`http://api-ecf.sarahkatz.fr/patients/${patientId}`, newData)
            .then((response) => {
                console.log('Patient updated successfully:', response.data);
                fetchData(); // Répéter la récupération des données après la modification
            })
            .catch((error) => {
                setError("Une erreur s'est produite lors de la modification du patient. Veuillez réessayer plus tard.");
                console.error('Error updating patient:', error);
            });
    };

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {dataBed && (
            <ul className={"patients-list"}>
                {dataBed.map((bed, index) => (
                    <Card key={index} bed={bed} handleEdit={handleEdit} />
                ))}
            </ul>
                )}
        </div>
    );
};

export default Patients;
