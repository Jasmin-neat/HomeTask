import React, { useState } from 'react';
import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase';

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(firebase);

    const registerClick = (event: React.MouseEvent) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                console.log('Created user: ', userCred.user);
            })
            .catch((err) => {
                console.log('Firebase create error', err);
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
            <SubmitButton type='button' onClick={registerClick}>
                Register
            </SubmitButton>
            {/* <SubmitButton type='button' onClick={registerClick}>
                    Register
                </SubmitButton> */}
        </Form>
    );
};
export default SignUpForm;
