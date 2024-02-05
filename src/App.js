
import './App.css';
import { jwtDecode } from 'jwt-decode';
import GroupComponent from './components/GroupComponent'
import WelcomeBanner from './components/WelcomeBanner';
function App() {
  console.log('Renderizando App');
  return (
    <div>
      <div>
        <WelcomeBanner></WelcomeBanner>
      </div>
      <div>
        <GroupComponent></GroupComponent>
      </div>
    </div>
    );
}

export default App;