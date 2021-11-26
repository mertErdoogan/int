import logo from './logo.svg';
import './assets/scss/main.scss';
import HomePageContainer from './Containers/HomePageContainer';
import HeaderComponent from './Components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomePageContainer />
    </div>
  );
}

export default App;