import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <Profile/>
      <Introduction name="Jhon Dae"/>
      <Introduction name="Aril Tantum"/>
    </div>
  );
}

export default App;
