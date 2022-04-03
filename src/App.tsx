import { FunctionComponent } from 'react';
import MainContainer from './components/MainContainer';
import MainContent from './components/MainContent';

interface AppProps {}

/**
 * The parent component of the FE application.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const App: FunctionComponent<AppProps> = ({}) => {
  return (
    <MainContainer>
      <MainContent />
    </MainContainer>
  );
};

export default App;
