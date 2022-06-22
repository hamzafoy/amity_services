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
              Amity Travel &amp; More LLC assists clients with ticketing services for both 
              domestic &amp; international flights. Amity can also assist with arranging 
              visas to Saudi Arabia &amp; other countries. Our company prepare vacation 
              packages to locations including Africa, Cancun, Europe, Hawaii, the Middle 
              East, &amp; Turkey. We also prepare Hajj &amp; Umrah packages for your 
              convenience!
            </p>

          </section>

          <section className="offColorContainer">
            <section className="travelPage_info">

              <h1>
                Our Travel Packages
              </h1>

              <aside className="travelPage_options">

                <article className="travelPage_options__card">

                  <h1>
                  Africa
                  </h1>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src="https://via.placeholder.com/375x175?text=Image+of+Travel+Destination+Here"
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Cancun
                  </h1>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src="https://via.placeholder.com/375x175?text=Image+of+Travel+Destination+Here"
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Europe
                  </h1>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src="https://via.placeholder.com/375x175?text=Image+of+Travel+Destination+Here"
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Hawaii
                  </h1>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src="https://via.placeholder.com/375x175?text=Image+of+Travel+Destination+Here"
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Middle East
                  </h1>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src="https://via.placeholder.com/375x175?text=Image+of+Travel+Destination+Here"
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Turkey
                  </h1>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src="https://via.placeholder.com/375x175?text=Image+of+Travel+Destination+Here"
                  />

                </article>

              </aside>

            </section>
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