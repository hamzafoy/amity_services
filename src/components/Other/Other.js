/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Other.css';
import Footer from '../subcomponents/Footer/Footer';
import NavBar from '../subcomponents/NavBar/NavBar';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function Other() {
  return (

    <>

        <NavBar/>

        <div className="otherPage">
        
          <section className="homePage_info">

            <h1>
              Property Management Services
            </h1>

            <p>
              Amity Services LLC helps those looking to find apartments to 
              rent or houses to purchase. We accept Section 8 vouchers and 
              can help those trying to secure homes. We have a real estate 
              agent as part of our team. Our services also include providing 
              assistance for those looking to renovate properties.
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

export default Other;