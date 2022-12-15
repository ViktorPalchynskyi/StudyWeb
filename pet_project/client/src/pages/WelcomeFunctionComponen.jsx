import { useOutletContext, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const WelcomeFunctionComponen = ({ name, age }) => {
   const { type } = useParams();
   const context = useOutletContext();
   const names = ['Misha', 'Viktor', 'Nurretin', 'Lena'];
   return (
      <div>
         <h2>My name is {name}</h2>
         <p>My age is {age}</p>
         <p>Type is {type}</p>
         <p>Context is {context.name}</p>
         <ul>
            {names.map((name) => <li key={uuidv4()}>{name}</li>)}
         </ul>
      </div>
   )
};

export default WelcomeFunctionComponen;