import { useParams, useOutletContext } from 'react-router-dom';

function Book() {
   const { id } = useParams();
   const autor = useOutletContext();
   return (
      <h1>My title is book #{id}. Author is {autor.name}.</h1>
   );
}

export default Book;