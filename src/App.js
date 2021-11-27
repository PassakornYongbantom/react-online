import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Logo/>
      <Header/>
      <Footer title = {9} website = {"www.google.com"} address = {"Bangkok"} postcode = {"11000"} isOpen></Footer>
      <Logo/>
    </>
  );
}



export default App;
