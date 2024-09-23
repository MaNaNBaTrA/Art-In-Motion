  import React from 'react';
  import './App.css'
  import Navbar from './components/navbar/Navbar';
  import Title from './components/title/Title';
  import Profile from './components/profile/Profile';
  import Project from './components/project/Project';
  import About from './components/about/About';
  import Contact from './components/contact/Contact';
  import Footer from './components/footer/Footer';

  function App() {
    return (
      <div className="font-sans cursor-default">
        <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] sm:gap-3 sm:grid-rows-[repeat(12,minmax(0,100px))] md:grid-rows-[repeat(34,minmax(0,1fr))] grid-rows-[repeat(12,minmax(0,100px))] gap-2 h-screen ">
          <Navbar />
          <Title />
          <Profile />
          <Project />
          <About />
          <Contact />
          <Footer />

        </div>
      </div>
    );
  }

  export default App;