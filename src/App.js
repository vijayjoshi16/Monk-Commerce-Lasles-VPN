import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';

const LandingPage = styled.div`
  margin: 5vh 5vw;
  font-family: "Rubik", sans-serif;
`

function App() {
  return (
    <LandingPage>
      <Navbar/>
    </LandingPage>
  );
}

export default App;
