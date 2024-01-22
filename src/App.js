import './App.css';
import logo from './logo.png'
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h1>
          Isaiah Amadeus Raya
        </h1>
        <h2>
          Software Engineer | Microsoft
        </h2>
        <div class="container">
          <div class="social-icon"> <SocialIcon url="https://www.linkedin.com/in/isaiah-raya-0235a0208/" style={{ height: 150, width: 150 }} fgColor="currentColor" /></div>
          <div class="social-icon"> <SocialIcon url="https://github.com/rayaisaiah" style={{ height: 150, width: 150 }} fgColor="currentColor" /></div>
          <div class="social-icon"> <SocialIcon url="mailto:rayaisaiah@gmail.com" style={{ height: 150, width: 150 }} fgColor="currentColor" /></div>
        </div>
      </header>
    </div>
  );
}

export default App;
