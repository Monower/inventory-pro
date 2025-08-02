import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/Home';
import Login from './pages/auth/login';
import MainLayout from './layout/MainLayout';

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;

const App = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
                <Route path="/login" element={<MainLayout><Login /></MainLayout>} />

                {/* <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;

