import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import Masthead from './component/Masthead'
import Anime from './component/Anime'
import Collection from './component/Collection'
import Copyright from './component/Copyright'

function App() {
  return (
    <>
    {/* <!-- Navigation--> */}
    <Navbar />

    {/* <!-- Masthead--> */}
    <Masthead />

    {/* <!-- Anime Section--> */}
    <Anime />

    {/* <!-- Collection Section--> */}
    <Collection />

    {/* <!-- Copyright Section--> */}
    <Copyright />

    </>
  );
}

export default App;
