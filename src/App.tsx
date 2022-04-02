import { FunctionComponent } from 'react';
import MainContainer from './components/MainContainer';
import MainContent from './components/MainContent';

interface AppProps {}

const App: FunctionComponent<AppProps> = ({}) => {
  return (
    <MainContainer>
      <MainContent />
    </MainContainer>
  );
};

export default App;
