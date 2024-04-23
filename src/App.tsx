import './App.css';
import styled from 'styled-components';
import { Header } from './laout/header/Header';
import { Main } from './laout/sections/main/Main';
import { Skills } from './laout/sections/skills/Skills';
import { About } from './laout/sections/about/About';
import { Works } from './laout/sections/works/Works';
import { Contacts } from './laout/sections/contacts/Contacts';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <About/>
            <Works/>
            <Contacts/>
        </div>
    );
}

export default App;

