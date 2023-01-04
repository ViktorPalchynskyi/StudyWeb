import { Link, Navigate, useNavigate } from "react-router-dom";

export default function User() {
   const navigate = useNavigate();
   return (
      <div>
         <div>Youre name is Viktor</div>
         <div>Youre age is 24</div>
         <Link to='../' reloadDocument={true}>Back</Link>
         <button onClick={() => navigate('/user/new', { replace: true, state: { userName: 'Natasha' } })}>Go to new user</button>
         {/* <Navigate to='/' /> */}
      </div>
   );
}