import { useState } from 'react';
import { sendMessage } from '../api/api';

const useContactMessage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      await sendMessage(formData);
      setStatus('Mensaje enviado con éxito.');
      setFormData({ name: '', email: '', phone: '', message: '', projectType: '' });
    } catch (error) {
      setStatus('Error al enviar el mensaje. Inténtalo de nuevo.');
      console.error(error);
    }
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
  };
};

export default useContactMessage;