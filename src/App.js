import './App.css'
import { Container} from './components/index'
import { Header, Hero , Process , Partners } from './sections/index'

const App = () => {
  return (
    <>
      <Header />
        <Hero />
        <Process/>
        <Partners/>
    </>
  )
}

export default App