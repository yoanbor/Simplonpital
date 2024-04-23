import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "./Card";

const Patients = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://api-ecf.sarahkatz.fr/beds')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    return (
        <div className="beds">
            <ul>
                {data.map((bed, index) => (
                    <Card key={index} bed={bed} className="patients"/>
                ))}
            </ul>
        </div>
    );
};

export default Patients;
