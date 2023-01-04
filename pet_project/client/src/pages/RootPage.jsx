import { NavLink, Outlet } from 'react-router-dom';
import '../App.css';

const RootPage = () => {
   const handleLinkStyle = ({ isActive }) => ({ backgroundColor: isActive ? 'coral' : '' });

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
                     <NavLink style={handleLinkStyle} to={`name`}>Your Name</NavLink>
                  </li>
                  <li>
                     <NavLink style={handleLinkStyle} to={`calc`}>Your Calc</NavLink>
                  </li>
                  <li>
                     <NavLink style={handleLinkStyle} to={`welcome/:type`}>Welcome</NavLink>
                  </li>
                  <li>
                     <NavLink style={handleLinkStyle} to={`welcome/class`}>Welcome 322</NavLink>
                  </li>
                  <li>
                     <NavLink style={handleLinkStyle} to={`user`}>User</NavLink>
                  </li>
               </ul>
            </nav>
         </div>
         <div id="detail">
            <h1>Main Page</h1>
            <Outlet context={{ name: 'Viktor', age: 24 }} />
         </div>
      </>
   );
}

export default RootPage;
