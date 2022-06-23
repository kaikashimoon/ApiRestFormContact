import './App.css';
import ContactForm from './component/ContactForm.jsx';
import Header from './component/header/Header.jsx';
import Footer from './component/footer/Footer.jsx';
const App = () => {
  return (
    <div className="App">      
        <div className='gradient__bg'>
          <Header/>
      </div> 
        <ContactForm />    
        <Footer />       
    </div>
  );
}

export default App;
