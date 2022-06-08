/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Accounting.css';
import Footer from '../subcomponents/Footer/Footer';
import NavBar from '../subcomponents/NavBar/NavBar';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function Accounting() {
  return (

    <>

        <NavBar/>

        <div className="accountingPage">

          <section className="homePage_info">

            <h1>
              Our Accounting Services
            </h1>

            <p>
              Amity Services LLC provides tax filing assistance including preparation for both 
              individuals and businesses. We have the means to provide translation for Arabic &amp;
              French speakers to aid them in filing taxes within the federal deadline. Ou quick &amp;
              convenient service paired with excellent customer service will leave you feeling 
              satisfied that you are in compliance with federal and state taxes!
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

export default Accounting;