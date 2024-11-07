import Container from "./components/Container";
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <header>
          <h1>Todo App</h1>
        </header>
      </Container>
    </>
  );
}

export default App;
