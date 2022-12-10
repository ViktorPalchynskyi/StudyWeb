import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import WelcomeClassComponent from '../pages/WelcomeClassComponent.jsx';
import WelcomeFunctionComponen from '../pages/WelcomeFunctionComponen.jsx';
import NameForm from '../pages/NameForm';
import Calculator from '../tempExample/Calculator';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/welcome',
            element: <WelcomeClassComponent />,
         },
         {
            path: '/welcome/func',
            element: <WelcomeFunctionComponen name='Viktor' age={24} />,
         },
         {
            path: 'name',
            element: <NameForm />,
         },
         {
            path: '/calc',
            element: <Calculator />,
         }
      ]
   },
   // {
   //    path: '/welcome',
   //    element: <WelcomeClassComponent />,
   // },
]);
