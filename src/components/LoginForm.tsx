import React, { useState } from 'react';
import styled from 'styled-components';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase';
import { Link, useHistory } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
`;
const FormGroup = styled.div`
    margin-top: 30px;
`;
const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    box-sizing: border-box;
`;
const SubmitButton = styled.button`
    background-color: #4caf50;
    margin-top: 30px;
    color: #ffffff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const auth = getAuth(firebase);

    const loginClick = (event: React.MouseEvent) => {
        event.preventDefault();


        signInWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log('Logged in user: ', userCred.user);
                history.push('/albums');
            })
            .catch((err) => {
                console.error('Firebase login error', err);
            });
    };
    return (
        <Form>
            <FormGroup>
                <h3>Email:</h3>
                <Input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    required
                />
            </FormGroup>
            <FormGroup>
                <h3>Password:</h3>
                <Input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    required
                />
            </FormGroup>
            <SubmitButton type='button' onClick={loginClick}>
                Login
            </SubmitButton>
            <p>
                Don't have an account? <Link to='/signup'>SignUp</Link>
            </p>
        </Form>
    );
};
export default LoginForm;
