import { Route, Routes } from 'react-router-dom'
import SignIn from './auth/sign-in/sign-in.tsx'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/cards" element={<div>cards</div>} />
      {/*<Route path="dashboard" element={<Dashboard />}>*/}
      {/*  <Route index element={<RecentActivity />} />*/}
      {/*  <Route path="project/:id" element={<Project />} />*/}
      {/*</Route>*/}
    </Routes>
  )
}
