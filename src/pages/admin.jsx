import LoginAdm from '@/components/admin/LoginAdmin'
import { StrictMode } from 'react'
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles'


export default function Admin() {
  return (
    <>
      <div className="space-y-4 sm:items-center sm:justify-center">
        <StrictMode>
          <StyledEngineProvider injectFirst>
            <CssVarsProvider>
              <LoginAdm />
            </CssVarsProvider>
          </StyledEngineProvider>
        </StrictMode>
      </div>
    </>
  )
}