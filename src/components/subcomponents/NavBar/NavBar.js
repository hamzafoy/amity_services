/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './NavBar.css';



/*::::::::::::::::::::::::::::::::::::::::
:::::::  Creating App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

function NavBar() {
  return (
    
    <nav className="navigationBar">

        <img
        alt="Amity Services logo of an airliner at the end of a flourished letter Y."
        className="navigationBar_logo"
        src="https://via.placeholder.com/450x100?text=Amity+Services+Logo+goes+here"
        />

        <aside className="navigationBar_menu">

            <h1>
                Accounting
            </h1>

            <h1>
                Paralegal
            </h1>

            <h1>
                Travel
            </h1>

            <h1>
                Other Services
            </h1>

            <section className="navigationBar_contacts">
                
            </section>

        </aside>

    </nav>

  );
}



/*::::::::::::::::::::::::::::::::::::::::
::::::  Exporting App Component  :::::::::
::::::::::::::::::::::::::::::::::::::::*/

export default NavBar;