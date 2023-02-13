import { useParams } from 'react-router-dom';

function Book() {
   const { id } = useParams();
   return (
      <h1>My title is book #{id}</h1>
   );
}

export default Book;