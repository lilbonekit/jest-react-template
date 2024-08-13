import { useState } from 'react';

import './App.css';
import { Form } from './components/Form/Form';
import { Input } from './components/Input';
import { Title } from './components/Title/Title';
import { validatePassword } from './helpers/validatePassword';
import { wait } from './helpers/wait';
import { Text } from './components/Text';

function App() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async ({ password }) => {
    const { success, error } = validatePassword(password);

    if (!success) {
      throw new Error(error);
    }

    await wait(1000);
  };

  const onSuccess = ({ name, password }) => {
    setErrorMessage('');
    setSuccessMessage(`User ${name} created with password ${password}`);
  };

  const onError = (error) => {
    setErrorMessage(error.message);
  };

  return (
    <>
      <Title>Create user</Title>
      <Form onSubmit={onSubmit} onSuccess={onSuccess} onError={onError}>
        <Input label="User name" name="name" />
        <Input label="Password" name="password" type="password" />
        <Input type="submit" value="Create user" />
      </Form>
      {successMessage && <Text isSuccess>{successMessage}</Text>}
      {errorMessage && <Text isError>{errorMessage}</Text>}
    </>
  );
}

export default App;
