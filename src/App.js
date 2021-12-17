import './App.css';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import FrontBanner from './components/FrontBanner/FrontBanner';
import Plan from './components/Plan/Plan';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

const LandingPage = styled.div`
  margin: 5vh 5vw;
  font-family: "Rubik", sans-serif;
`

function App() {
  return (
    <LandingPage>
      <Navbar/>
      <FrontBanner />
      <Plan />
      <Testimonials />
      <Footer />
    </LandingPage>
  );
}

export default App;
