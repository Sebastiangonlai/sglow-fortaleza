import { StrictMode } from 'react'
import Test4 from '@/components/test-components/TestCuatroForm'
import { StyledEngineProvider } from '@mui/joy/styles'

export default function pruebaTeoricoCuatro() {
  return (
    <div className="space-y-10 sm:items-center sm:justify-center" >
      <StrictMode>
        <StyledEngineProvider injectFirst>
          <Test4 />
        </StyledEngineProvider>
      </StrictMode>
    </div>
  )
}