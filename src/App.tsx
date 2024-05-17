import './App.css';
import styled from 'styled-components';
import { Header } from './laout/header/Header';
import { Main } from './laout/sections/main/Main';
import { Skills } from './laout/sections/skills/Skills';
import { About } from './laout/sections/about/About';
import { Works } from './laout/sections/works/Works';
import { Contacts } from './laout/sections/contacts/Contacts';
import { Slogan } from './laout/sections/slogan/Slogan';
import { Footer } from './laout/footer/Footer';
import { Particle } from './components/particle/Particle';


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <About/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

