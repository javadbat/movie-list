import './App.css'
import { RouterProvider } from 'react-router'
import { router } from './components/router/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@utils/api/tanstack-query'

function App() {
  return (
    < QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
    </QueryClientProvider >
  )
}

export default App
