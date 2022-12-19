import { useEffect } from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
   const navigate = useNavigate();
   useEffect(() => {
      setTimeout(() => {
         navigate('/');
      }, 1000);
   }, []);
   return (
      <div>
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
            <i>404</i>
         </p>
      </div>
   )
};

export default ErrorPage;