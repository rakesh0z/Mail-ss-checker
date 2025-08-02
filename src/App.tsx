import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SubscribeForm from './components/SubscribeForm';
import HamburgerMenu from './components/HamBurgerMenu';
import AdminSendUpdate from './components/AdminSendUpdate';


function App() {
  return (
    <div className="relative font-sans bg-black min-h-screen text-gray-800 overflow-hidden">
      {/* Centered blurry blue background object */}

      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[180px] opacity-40 z-0"
        aria-hidden="true"
      ></div>
      <div className="relative z-10">
        <div className="absolute top-4 left-4 z-50">
        <HamburgerMenu />
      </div>
        <Hero />
        <About />
        <SubscribeForm />
        <AdminSendUpdate />
        <footer className="text-center text-sm p-4 text-gray-500">© 2025 Senior Sensee</footer>
      </div>
    </div>
  );
}

export default App;