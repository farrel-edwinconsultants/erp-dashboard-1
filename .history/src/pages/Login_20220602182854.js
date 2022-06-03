import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import './Login.css';
import tw from 'twin.macro';
import Logo from './Logo.jpeg'
import Swal from 'sweetalert2'

async function loginUser(credentials) {
    return fetch('http://192.168.100.18:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

    const Container = tw.div`min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:px-8`;
    const FormContainer = tw.div`max-w-md w-full space-y-8`;
    const Title = tw.h2`mt-6 text-center text-3xl font-extrabold text-gray-900`;
    const LoginForm = tw.form`mt-8 space-y-6`;
    const LoginFormGroup = tw.div`rounded-md shadow-sm -space-y-px`;
    const UserField = tw.input`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;
    const PasswordField = tw.input`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`;
    const Button = tw.button`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            const token = await loginUser({
                username,
                password
            });
            setToken(token);
            Swal.fire({
              icon: 'success',
              timer: 1200,
              title: 'Success Login',
              text: 'Welcome, Master Admin',
            })
        } else (
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        )
        return 
      }

  return(
      <>
      <Container>
      <FormContainer>
        <img className="img-fluid rounded mx-auto d-block" src={Logo} style={{width: '30%'}} alt="logo" />
        <p className="text-center">
          <i>"Once upon a time, dinosaur use app to take a note"</i>
        </p>
        <Title>Login to BMA</Title>
            <LoginForm onSubmit={handleSubmit}>
              <LoginFormGroup>
                <UserField
                  placeholder="Username"
                  onChange={e => setUserName(e.target.value)}
                />
                <PasswordField
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </LoginFormGroup>
              <Button type="submit">
                Login
              </Button>
            </LoginForm>
      </FormContainer>
    </Container>
      </>
  )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }