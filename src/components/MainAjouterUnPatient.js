import React, {useState} from 'react';
import axios from "axios";

const MainAjouterUnPatient = () => {

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [birthdate, setBirthdate] = useState("");
        const [socialSecurityNumber, setSocialSecurityNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://api-ecf.sarahkatz.fr/patients/assign/{serviceId}', {
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate,
            socialSecurityNumber: socialSecurityNumber
        });
        setFirstName("");
        setLastName("");
        setBirthdate("");
        setSocialSecurityNumber("");
    }

        return (
            <div className="main-container">
                <main>
                    <h2>Patient</h2>

                    <form className="form-ajout-patient" onSubmit={(e) => (handleSubmit(e))}>
                        <input type="text" required id={"lastName"} placeholder={"Nom"}
                               onChange={(e) => setLastName((e.target.value))}/>
                        <input type="text" required id={"firstName"} placeholder={"Prénom"}
                               onChange={(e) => setFirstName((e.target.value))}></input>
                        <input type="text" required id={"socialSecurityNumber"}
                               placeholder={"Numéro de sécurité sociale"}
                               onChange={(e) => setSocialSecurityNumber((e.target.value))}/>
                        <input type="text" required id={"birthdate"} placeholder={"Date de naissance"}
                               onChange={(e) => setBirthdate((e.target.value))}/>

                        <h2>Service</h2>
                        <select id="services">
                            <option value={firstName}>{firstName}</option>
                        </select>


                        <h2>Chambre</h2>


                    </form>
                </main>
            </div>
        );
};
export default MainAjouterUnPatient;
