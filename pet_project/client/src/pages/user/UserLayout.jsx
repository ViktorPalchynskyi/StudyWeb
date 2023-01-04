import { Link, Outlet } from 'react-router-dom';

export default function UserLayout() {
   return (
      <div>
         <h1>User Screen</h1>
         <nav>
            <ul>
               <li>
                  <Link to={`:id`}>Find User</Link>
               </li>
               <li>
                  <Link to={`new`}>New User</Link>
               </li>
            </ul>
         </nav>
         <Outlet />
      </div>
   );
}