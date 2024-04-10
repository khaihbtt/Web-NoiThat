
import './App.scss';
import  Header from './components/Header';
import Container from 'react-bootstrap/Container';
import HomePage from './pages/user/homePage';

function App() {
  return (
    <div>
      <Container>
      <Header/>
      </Container>
      <HomePage/>
    </div>
  );
}

export default App;
