import { Route, Routes } from "react-router";


export function UserRouter() {
   return (
      <Routes>
         <Route element={<UserLayout />}>
            <Route path=':id' element={<User />} />
            <Route path='new' element={<NewUser />} />
            <Route path='*' element={<UserNotFound />} />
         </Route>
      </Routes>
   )
}