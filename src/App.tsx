import React from 'react';
import './App.css';
import AppRouter from "./component/RouterComponent";
import NavBar from "./component/Navbar";
import Container from '@material-ui/core/Container';
import './assets/style.scss';
function App() {
    return (
        <div>
            <NavBar/>
            <Container className="innerContainer">
                <AppRouter/>
            </Container>
        </div>
    );
}

export default App;
