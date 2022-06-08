/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Paralegal.css';
import Footer from '../subcomponents/Footer/Footer';
import NavBar from '../subcomponents/NavBar/NavBar';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function Paralegal() {
  return (

    <>

        <NavBar/>

        <div className="paralegalPage">

          <section className="homePage_info">

            <h1>
              Our Paralegal Services
            </h1>

            <p>
              Amity Services LLC provides a number of services including public notary, 
              certified translations in Arabic, English, &amp; French, and legal document 
              preparation. Our in-house paralegal specializes in immigration work and can 
              help prepare forms and documents including those related to asylum, citizenship, 
              green card, petitions for relatives, TPS, visas (investor, lottery, student), 
              work authorization. We can also help with contract preparation for businesses.
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

export default Paralegal;