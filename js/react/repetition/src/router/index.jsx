import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import BooksRouter from './BooksRouter';

function AppRoutes() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/books/*' element={<BooksRouter />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   );
}

export default AppRoutes;
