import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Download from './components/DownloadButton';
import "./assets/css/style.css"

function App() {

  const [tabs] = useState(['About', 'Portfolio', 'Contact'])
  const [currentTab, setCurrentTab] = useState(tabs[0])
  return (
    <div className="content">
      <Nav 
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />
      {currentTab === 'About' && 
        <div>
          <Hero />
          <About />
        </div>
      }
      {currentTab === 'Portfolio' && <Portfolio />}
      {currentTab === 'Contact' && <ContactForm />}
      {currentTab === 'Resume' && <Resume />}
      <Download />
      <Footer />
    </div>
  );
}

export default App;
