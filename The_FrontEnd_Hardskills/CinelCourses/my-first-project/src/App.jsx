import "./App.css";
import MeuComponente from "./components/MeuComponente";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";

function App() {
  const animal1 = {
    nome: "Nelson",
    idade: 10,
  };

  const animal2 = {
    nome: "Amanda",
    idade: 5,
  };

  const animal3 = {
    nome: "Ricardo",
    idade: 8,
  };

  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <MeuComponente animal={animal1} />
      <MeuComponente animal={animal2} />
      <MeuComponente animal={animal3} />
      <CreditCard/>
    </div>
  );
}

export default App;
