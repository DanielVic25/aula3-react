import Cabecalho from "./components/cabecalho";
import Saudacao from "./components/saudacao";
import Cartao from "./components/cartao";
import Rodape from "./components/rodape";

function App() {
  const nome = "Daniel Victor";
  const curso = "Análise e Desenvolvimento de Sistemas";

  const hobbies = ["Programação", "Dançarino", "Tecnologia", "Futebol"];

  const totalAulas = "Construção de Front-End";

  return (
    <>
      <Cabecalho />

      <Saudacao />

      <Cartao titulo="Sobre Mim">
        <p>Nome: {nome}</p>
        <p>Curso: {curso}</p>

        <h3>Hobbies</h3>

        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </Cartao>

      <Cartao titulo="Aulas">
        <p>{totalAulas}</p>
      </Cartao>

      <Rodape />
    </>
  );
}

export default App;
