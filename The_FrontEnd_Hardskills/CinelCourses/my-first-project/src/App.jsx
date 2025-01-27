import './App.css'
import MeuComponente from './components/MeuComponente'

function App() {

  const animal1 = {
    nome: "Nelson",
    idade: 10
  }

  const animal2 = {
    nome: "Amanda",
    idade: 5
  }

  const animal3 = {
    nome: "Ricardo",
    idade: 8
  }

  return (
      <div className='App'>
          <MeuComponente animal={animal1}/>
          <MeuComponente animal={animal2}/>
          <MeuComponente animal={animal3}/>
      </div>
  )
}

export default App
