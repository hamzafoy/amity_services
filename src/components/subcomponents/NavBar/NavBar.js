/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './NavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

const menu = (
    <aside className="navigationBar_menu">

            <Link to="/" className="navigationBar_menu__link" title="Home">
                <h1>
                    Home
                </h1>
            </Link>

            <Link to="/accounting" className="navigationBar_menu__link" title="Accounting">
                <h1>
                    Accounting
                </h1>
            </Link>

            <Link to="/paralegal" className="navigationBar_menu__link" title="Paralegal">
                <h1>
                    Paralegal
                </h1>
            </Link>

            <Link to="/travel" className="navigationBar_menu__link" title="Travel">
                <h1>
                    Travel
                </h1>
            </Link>

            <Link to="/additional_services" className="navigationBar_menu__link" title="Other Services">
                <h1>
                    Other Services
                </h1>
            </Link>

            <section className="navigationBar_contacts">
                
            </section>

        </aside>
)

function NavBar() {

    const collapsed = useState(true);
    const MySubcomponents = {
        Hamburger: function Hamburger() {
            return <p className="hamburger_icon">&#8803;</p>
        }
    };
    

    return (
    
    <nav className="navigationBar">

        <img
        alt="Amity Services logo of an airliner at the end of a flourished letter Y."
        className="navigationBar_logo"
        src="https://via.placeholder.com/450x100?text=Amity+Services+Logo+goes+here"
        />

        {window.innerWidth < 1000 ? <MySubcomponents.Hamburger/> : null}

        {(collapsed ? null : menu && window.innerWidth < 1000) || (window.innerWidth > 1000 ? menu : null)}

        {/* <aside className="navigationBar_menu">

            <Link to="/" className="navigationBar_menu__link" title="Home">
                <h1>
                    Home
                </h1>
            </Link>

            <Link to="/accounting" className="navigationBar_menu__link" title="Accounting">
                <h1>
                    Accounting
                </h1>
            </Link>

            <Link to="/paralegal" className="navigationBar_menu__link" title="Paralegal">
                <h1>
                    Paralegal
                </h1>
            </Link>

            <Link to="/travel" className="navigationBar_menu__link" title="Travel">
                <h1>
                    Travel
                </h1>
            </Link>

            <Link to="/additional_services" className="navigationBar_menu__link" title="Other Services">
                <h1>
                    Other Services
                </h1>
            </Link>

            <section className="navigationBar_contacts">
                
            </section>

        </aside> */}

    </nav>

  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default NavBar;