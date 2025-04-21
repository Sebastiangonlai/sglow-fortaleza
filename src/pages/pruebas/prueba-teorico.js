import { StrictMode } from 'react'
import Test1 from '@/components/test-components/TestUnoForm'
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles'

export default function pruebaTeorico() {
  return (
    <div className="space-y-10 sm:items-center sm:justify-center" >
      <StrictMode>
        <StyledEngineProvider injectFirst>
          <CssVarsProvider>
            <Test1 />
          </CssVarsProvider>
        </StyledEngineProvider>
      </StrictMode>
    </div>
  )
}
