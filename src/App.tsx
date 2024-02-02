// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import AlbumPage from './components/AlbumPage';
import styled from 'styled-components';

const MyDiv = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const App: React.FC = () => {
    // const handleLogin = (email: string, password: string) => {
    //     console.log(`Logging in with ${email} and ${password}`);
    // };

    return (
        <MyDiv>
            <h1>Login Album Website</h1>
            {/* <LoginForm onLogin={handleLogin} /> */}
            <Router>
                <Route exact path='/' render={() => <Redirect to='/login' />} />
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={SignUpForm} />
                <Route path='/albums' component={AlbumPage} />
            </Router>
        </MyDiv>
    );
};

export default App;
