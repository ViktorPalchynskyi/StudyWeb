import { v4 as uuidv4 } from 'uuid';

const WelcomeFunctionComponen = ({ name, age }) => {
   const names = ['Misha', 'Viktor', 'Nurretin', 'Lena'];
   return (
      <div>
         <h2>My name is {name}</h2>
         <p>My age is {age}</p>
         <ul>
            {names.map((name) => <li key={uuidv4()}>{name}</li>)}
         </ul>
      </div>
   )
};

export default WelcomeFunctionComponen;