import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import WelcomeClassComponent from '../pages/WelcomeClassComponent.jsx';
import WelcomeFunctionComponen from '../pages/WelcomeFunctionComponen.jsx';
import NameForm from '../pages/NameForm';
import Calculator from '../tempExample/Calculator';
import ErrorPage from '../pages/ErrorPage';

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<RootPage />} >
               <Route path="/name" element={<NameForm />} />
               <Route path='/welcome'>
                  <Route path="class" element={<WelcomeClassComponent />} />
                  <Route path=":type" element={<WelcomeFunctionComponen />} />
               </Route>
               <Route path="/calc" element={<Calculator />} />
               <Route path="*" element={<ErrorPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
};

export default Router;