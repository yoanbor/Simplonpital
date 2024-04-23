import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1>SimplonPital</h1>
               <form>
                   <input id={"rechercher"} type="text" placeholder="Rechercher un patient" />
               </form>
            </header>

        </div>
    );
};

export default Header;
