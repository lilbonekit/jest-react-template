import { useState } from 'react';
import { validatePassword } from '../helpers/validatePassword';
import { wait } from '../helpers/wait';

const useCreateUser = () => {
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

  return { successMessage, errorMessage, onSubmit, onSuccess, onError };
};

export { useCreateUser };
