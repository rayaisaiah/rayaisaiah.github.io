import './App.css';
import logo from './logo.png'
import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Clash Display' }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');
      </style>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <h1 style={{ fontFamily: 'Karla', marginBottom: '1%' }}>
          Isaiah Amadeus Raya
        </h1>
        <h2 style={{ fontFamily: 'Karla' }}>
          Software Engineer | Microsoft
        </h2>
        <div class="container">
          <div class="social-icon"> <SocialIcon url="https://www.linkedin.com/in/isaiah-raya-0235a0208/" target="_blank" rel="noopener noreferrer" style={{ height: 150, width: 150 }} fgColor="currentColor" /></div>
          <div class="social-icon"> <SocialIcon url="https://github.com/rayaisaiah" target="_blank" rel="noopener noreferrer" style={{ height: 150, width: 150 }} fgColor="currentColor" /></div>
          <div class="social-icon" onClick={() => window.open('mailto:rayaisaiah@gmail.com')}> <SocialIcon url="mailto:rayaisaiah@gmail.com" style={{ height: 150, width: 150 }} bgColor="#FF474D" fgColor="currentColor" /></div>
        </div>
      </header>
    </div>
  );
}

export default App;
