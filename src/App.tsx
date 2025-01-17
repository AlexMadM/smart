import './index.css'

import { SignUp } from './components/auth/sign-up/sign-up.tsx'
import Header from './components/layout/header/header.tsx'

function App() {
  return (
    <div className="flex flex-col items-center  h-screen bg-dark-900">
      <Header isLoggedIn={false} />
      <SignUp />
    </div>
  )
}

export default App
