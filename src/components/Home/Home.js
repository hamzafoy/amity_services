/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Home.css';
import Footer from '../subcomponents/Footer/Footer';
import NavBar from '../subcomponents/NavBar/NavBar';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function App() {

  return (

    <>

        <NavBar/>

        <div className="homePage">
        
          <img
          alt="Images showcasing services for Amity."
          className="homePage_carousel"
          src="https://via.placeholder.com/1200x625?text=Images+Rotate+Here"
          />

          <hr
          className="homePage_horizontalLine"
          />

          <section className="offColorContainer">
            <section className="homePage_info">

              <h1>
                What is Amity Travel
              </h1>

              <p>
                Amity Travel &amp; More LLC specializes in preparing and selling travel packages for those looking to 
                travel abroad from the United States to vacation or to attend Hajj or Umrah. The Amity 
                Services office in Kentucky is operated by Mohamed Aljoujah and has a suite of services 
                in addition to serving as a travel agency including tax 
                preparation, document preparation, notary public, translations to Arabic, English, &amp; 
                French.
              </p>

            </section>
          </section>

          <hr
          className="homePage_horizontalLine"
          />

          <section className="homePage_teamList">

            <h1>
              Who is on our Team?
            </h1>

            <p>
              Amity Travel &amp; More LLC has the following staff members.
            </p>

            <aside className="homePage_staff">

              <article className="homePage_staff__card">

                <h1>
                  Mohamed Aljoujah
                </h1>

                <img
                alt="Images showcasing services for Amity."
                className="homePage_card__foto"
                src="https://via.placeholder.com/150x200?text=Headshot+Here"
                />

                <p>
                  Travel Agent
                </p>

              </article>

              {/* <article className="homePage_staff__card">

                <h1>
                  Omar Karim
                </h1>

                <img
                alt="Images showcasing services for Amity."
                className="homePage_card__foto"
                src="https://via.placeholder.com/150x200?text=Headshot+Here"
                />

                <p>
                  Paralegal
                </p>

              </article> */}

              <article className="homePage_staff__card">

                <h1>
                  Juman
                </h1>

                <img
                alt="Images showcasing services for Amity."
                className="homePage_card__foto"
                src="https://via.placeholder.com/150x200?text=Headshot+Here"
                />

                <p>
                  Marketing
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

export default App;