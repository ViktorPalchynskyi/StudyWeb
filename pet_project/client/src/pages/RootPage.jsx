import { Link, Outlet } from 'react-router-dom';
import '../App.css';

const RootPage = () => {
   return (
      <>
         <div id="sidebar">
            <h1>React Router Contacts</h1>
            <div>
               <form id="search-form" role="search">
                  <input
                     id="q"
                     aria-label="Search contacts"
                     placeholder="Search"
                     type="search"
                     name="q"
                  />
                  <div
                     id="search-spinner"
                     aria-hidden
                     hidden={true}
                  />
                  <div
                     className="sr-only"
                     aria-live="polite"
                  ></div>
               </form>
               <form method="post">
                  <button type="submit">New</button>
               </form>
            </div>
            <nav>
               <ul>
                  <li>
                     <Link to={`name`}>Your Name</Link>
                  </li>
                  <li>
                     <Link to={`calc`}>Your Calc</Link>
                  </li>
                  <li>
                     <Link to={`welcome`}>Welcome</Link>
                  </li>
                  <li>
                     <Link to={`welcome/func`}>Welcome 322</Link>
                  </li>
               </ul>
            </nav>
         </div>
         <div id="detail">
            <Outlet />
         </div>
      </>
   );
}

export default RootPage;
