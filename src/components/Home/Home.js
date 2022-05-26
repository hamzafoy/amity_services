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
                What is Amity Services?
              </h1>

              <p>
                Amity Services LLC is one of the subsidiaries of Amity Travels which is a nationwide
                company that specializes in preparing and selling travel packages for those looking to 
                travel abroad from the United States to vacation or to attend Hajj or Umrah. The Amity 
                Services office in Kentucky is operated by Mohamed Aljoujah and has a suite of services 
                in addition to serving as a travel agency including immigration legal services, CPA, tax 
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
              Amity Services has the following staff members.
            </p>

            <aside className="homePage_staff">

              <article className="homePage_staff__card">

                <h1>
                  Mohamed Aljoujah
                </h1>

                <p>
                  CPA, Travel Agent
                </p>

              </article>

              <article className="homePage_staff__card">

                <h1>
                  Omar Karim
                </h1>

                <p>
                  Paralegal
                </p>

              </article>

              <article className="homePage_staff__card">

                <h1>
                  Juman
                </h1>

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