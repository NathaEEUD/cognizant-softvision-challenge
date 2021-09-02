import { extendTheme, theme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px'
})

const styles = {
  global: {
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    },
    'html, body': {
      boxSizing: 'border-box'
    }
  }
}

export default extendTheme({
  breakpoints,
  styles,
  colors: {
    primary: theme.colors.teal[900],
    secondary: theme.colors.gray[300],
    background: {
      primary: theme.colors.gray[100],
      secondary: theme.colors.gray[300],
      tertiary: theme.colors.gray[200]
    }
  }
})
