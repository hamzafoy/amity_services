/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Footer.css';
import { Link } from 'react-router-dom';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function Footer() {
  return (
    
    <footer className="footerBar">

        <section className="footerBar_contactInfo">

            <iframe
            className="footerBar_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1567.781119889781!2d-85.63498591992716!3d38.19684149992131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690b0da19dc2f5%3A0x78b8e80b115f7934!2sAMITY%20SERVICES!5e0!3m2!1sen!2sus!4v1653581294568!5m2!1sen!2sus"
            width="345"
            height="250"
            allowFullScreen=""
            aria-hidden="false"
            loading="lazy"
            tabIndex="0"
            title="Amity Services Office Location"
            />
            
            <aside className="footerBar_contactInfo__list">

                <h1>
                    Contact Us
                </h1>

                <p>
                    6500 Six Mile Ln Ste 1,<br/>Louisville KY 40218
                </p>

                <p>
                    Office: (502) 742-0007<br/>Cell: (502) 422-1378
                </p>

                <p>
                    info@amityservices.vip
                </p>

            </aside>
            
        </section>

        <section className="footerBar_menu">

            <h1>
                Menu
            </h1>

            <Link to="/" className="footerBar_menu__link" title="Home">
                <p>
                    Home
                </p>
            </Link>

            <Link to="/accounting" className="footerBar_menu__link" title="Accounting">
                <p>
                    Accounting
                </p>
            </Link>

            <Link to="/paralegal" className="footerBar_menu__link" title="Paralegal">
                <p>
                    Paralegal
                </p>
            </Link>

            <Link to="/travel" className="footerBar_menu__link" title="Travel">
                <p>
                    Travel
                </p>
            </Link>

            <Link to="/additional_services" className="footerBar_menu__link" title="Other Services">
                <p>
                    Other Services
                </p>
            </Link>

        </section>

    </footer>

  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default Footer;