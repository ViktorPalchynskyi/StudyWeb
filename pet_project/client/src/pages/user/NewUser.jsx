import { useLocation } from 'react-router-dom';

export default function NewUser() {
   const location = useLocation();
   console.log('location', location);

   return (
      <div>
         <input type='text' placeholder='What is your name?' />
         <input type='number' placeholder='What is your age?' />
         <h2>{location.state?.userName}</h2>
      </div>
   );
}