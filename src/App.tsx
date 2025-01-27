import './index.css'

import { Router } from './components/router.tsx'

import { LayoutPrimitive } from './components/layout.tsx'
import QueryProvider from './components/query-provider.tsx'
import { BrowserRouter } from 'react-router'

function App() {
  return (
    <div className="flex flex-col items-center  h-screen bg-dark-900">
      <QueryProvider>
        <BrowserRouter>
          <LayoutPrimitive />
          <Router />
        </BrowserRouter>
      </QueryProvider>
    </div>
  )
}

export default App
