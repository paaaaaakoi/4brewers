import React from 'react';
import './App.scss';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Main from './contaiters/main/main';
import Team from './contaiters/team/team';
import Footer from './components/footer/footer';
import About from './contaiters/about/about';
import Sorts from './contaiters/sorts/sorts';
import Contacts from './contaiters/contacts/contacts';
import UpButton from "./components/up-button/up-button";

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/team" element={<Team />} />
      <Route path="/about" element={<About />} />
      <Route path="/sorts" element={<Sorts />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    <Footer />
    <UpButton />
  </div>
);

export default App;
