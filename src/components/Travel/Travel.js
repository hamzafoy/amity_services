/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Travel.css';
import Footer from '../subcomponents/Footer/Footer';
import NavBar from '../subcomponents/NavBar/NavBar';
import africa from './resources/kenya.jpeg';
import cancun from './resources/cancun.jpg';
import europe from './resources/europe.jpg';
import hawaii from './resources/hawaii.jpg';
import imageFlyer from './resources/image.png';
import mideast from './resources/amman.jpg';
import turkey from './resources/turkey.jpg';



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
                  src={africa}
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Cancun
                  </h1>

                  <img
                  alt="Image of Cancun, Mexico."
                  className="travelPage_card__foto"
                  src={cancun}
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Europe
                  </h1>

                  <img
                  alt="Image of Budapest, Hungary."
                  className="travelPage_card__foto"
                  src={europe}
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Hawaii
                  </h1>

                  <img
                  alt="Image of Hawaii."
                  className="travelPage_card__foto"
                  src={hawaii}
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Middle East
                  </h1>

                  <img
                  alt="Image of Amman, Jordan."
                  className="travelPage_card__foto"
                  src={mideast}
                  />

                </article>

                <article className="travelPage_options__card">

                  <h1>
                  Turkey
                  </h1>

                  <img
                  alt="Image of Istanbul, Turkey."
                  className="travelPage_card__foto"
                  src={turkey}
                  />

                </article>

              </aside>

            </section>
          </section>

          <section className="travelPage_info">

              <h1>
                Our Hajj &amp; Umrah Packages
              </h1>

              <aside className="travelPage_options">

                <article className="travelPage_options__card">

                  <h1>
                  Umrah
                  </h1>

                  <h2>
                    Dec. 27th 2022 - Jan. 3rd 2023
                    <br/>
                    Single: $3,395, Double: $2,895
                  </h2>

                  <img
                  alt="Image of Nairobi."
                  className="travelPage_card__foto"
                  src={africa}
                  />

                  <p>
                    Visa processing for American passports only, <br/>
                    5-star hotel facing the Haram in Mecca &amp; Madina, <br/>
                    Daily open buffet breakfast, <br/>
                    Visit to Mazarat in Mecca &amp; Medina, <br/>
                    Amity Travel supporting staff 24??7 <br/>
                    PCR testing in Saudi Arabia on return, <br/>
                    Does not include domestic add-on <br/> luggage fees to &amp; from the gateways. <br/>
                    <a href={imageFlyer} target="_blank" download={imageFlyer}>More details here </a>
                  </p>

                </article>

              </aside>

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