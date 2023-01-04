import { Route, Routes } from 'react-router';
import UserLayout from '../pages/user/UserLayout';
import User from '../pages/user/User';
import NewUser from '../pages/user/NewUser';
import UserNotFound from '../pages/user/UserNotFound';
import UserList from '../pages/user/UserList';

export default function UserRouter() {
   return (
      <Routes>
         <Route element={<UserLayout />}>
            <Route index element={<UserList />} />
            <Route path=':id' element={<User />} />
            <Route path='new' element={<NewUser />} />
            <Route path='*' element={<UserNotFound />} />
         </Route>
      </Routes>
   )
}