import AppRouter from './router/AppRouter'
import theme from './components/GlobalStyles/theme'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
<AppRouter/>
    </ThemeProvider>
  )
}
export default App