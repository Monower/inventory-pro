import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/login';

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;

