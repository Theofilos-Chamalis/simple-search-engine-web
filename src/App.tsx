import { FunctionComponent } from 'react';
import './styles/App.css';

interface AppProps {}

const App: FunctionComponent<AppProps> = ({}) => {
  return (
    <div className="App">
      <p style={{ fontWeight: 400 }}>Hello world</p>
    </div>
  );
};

export default App;
