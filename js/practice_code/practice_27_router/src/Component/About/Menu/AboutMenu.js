import {NavLink} from 'react-router-dom';

const selectedStyle = {
   backgroundColor: "white",
   color: "tomato"
  };

export default ({match}) => (
   <div>
      <li>
         <NavLink to="/about"
         style={match.isExact && selectedStyle}>
            [Company]
            </NavLink>
      </li>
      <li>
         <NavLink to="/about/history"
         activeStyle={selectedStyle}>
         [History]
         </NavLink>
      </li>
      <li>
         <NavLink to="/about/services"
         activeStyle={selectedStyle}>
         [Services]
         </NavLink>
      </li>
      <li>
         <NavLink to="/about/location"
         activeStyle={selectedStyle}>
         [Location]
      </NavLink>
      </li>
   </div>
);