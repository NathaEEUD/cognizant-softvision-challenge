import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'components/00_foundations/theme'
import Dashboard from '@templates/dashboard/Dashboard'
import { CandidatesProvider } from '@feature/candidate/context'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CandidatesProvider>
        <Dashboard />
      </CandidatesProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
