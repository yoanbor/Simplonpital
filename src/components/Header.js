import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <header>
                <Link to="/*">
                    <h1>SimplonPital</h1>
                </Link>
                <Link to="/ajouterunpatient">
                    <button id="Ajouter-Patient">Créer un nouveau patient</button>
                </Link>
            </header>

        </div>
    );
};

export default Header;
