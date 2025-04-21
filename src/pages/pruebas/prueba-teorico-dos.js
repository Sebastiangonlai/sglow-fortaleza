import { StrictMode } from 'react'
import Test2 from '@/components/test-components/TestDosForm'
import { StyledEngineProvider } from '@mui/joy/styles'

export default function pruebaTeoricoDos() {
  return (
    <div className="space-y-10 sm:items-center sm:justify-center" >
      <StrictMode>
        <StyledEngineProvider injectFirst>
          <Test2 />
        </StyledEngineProvider>
      </StrictMode>
    </div>
  )
}