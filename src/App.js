
import './App.scss';

import Container from 'react-bootstrap/Container';

import RouterCustom from './router';
import { BrowserRouter } from 'react-router-dom';
import HeaderMe from './components/Header1';

function App() {
  return (
    <div>
      {/* <Container>
      <HeaderMe/>
      </Container> */}

      <BrowserRouter>
        <RouterCustom/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
