import { ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import Menu from './components/menu/menu';
import Home from './pages/home/home';

const App = (): ReactElement => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Home />
      <Menu />
    </Container>
  );
};

export default App;
