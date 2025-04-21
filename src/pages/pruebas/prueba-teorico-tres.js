import { StrictMode } from 'react'
import Test3 from '@/components/test-components/TestTresForm'
import { StyledEngineProvider } from '@mui/joy/styles'

export default function pruebaTeoricoTres() {
  return (
    <div className="space-y-10 sm:items-center sm:justify-center" >
      <StrictMode>
        <StyledEngineProvider injectFirst>
          <Test3 />
        </StyledEngineProvider>
      </StrictMode>
    </div>
  )
}