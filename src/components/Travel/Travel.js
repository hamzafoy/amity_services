/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Travel.css';
import Footer from '../subcomponents/Footer/Footer';
import NavBar from '../subcomponents/NavBar/NavBar';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function Travel() {
  return (

    <>

        <NavBar/>

        <div className="travelPage">

          <section className="homePage_info">

            <h1>
              Our Travel Services
            </h1>

            <p>
              Amity Services LLC assists clients with ticketing services for both 
              domestic &amp; international flights. Amity can also assist with arranging 
              visas to Saudi Arabia &amp; other countries. Our company prepare vacation 
              packages to locations including Africa, Cancun, Europe, Hawaii, the Middle 
              East, &amp; Turkey. We also prepare Hajj &amp; Umrah packages for your 
              convenience!
            </p>

          </section>
        
        </div>

        <Footer/>

    </>

  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default Travel;