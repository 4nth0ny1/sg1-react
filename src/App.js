import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      <LandingPage 
          name={'Billy'} 
          age={32} 
          location={'Chicago'}
      />
    </div>
  );
}

export default App;
