import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // Enviar para o backend
      await axios.post('/api/contact', formData);
      
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Mensagem enviada com sucesso!' }
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Ocorreu um erro. Tente novamente.' }
      });
    }
  };

  return (
    <section name="contact" className="w-full min-h-screen bg-[#0f2847] text-gray-300 py-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00a8e8]">Contato</p>
          <p className="py-4 text-lg">Preencha o formulário abaixo ou envie-me um email - edvaldolaurentina07@hotmail.com</p>
        </div>

        <div className="w-full mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col max-w-[600px] mx-auto">
            <input
              className="bg-[#1d3e6f] p-3 rounded text-white mb-4"
              type="text"
              placeholder="Nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-[#1d3e6f] p-3 rounded text-white mb-4"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-[#1d3e6f] p-3 rounded text-white mb-4"
              placeholder="Mensagem"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              className="bg-[#00a8e8] hover:bg-[#007bb5] text-white font-bold py-2 px-4 rounded transition duration-300"
              type="submit"
              disabled={status.submitting}
            >
              {status.submitting ? 'Enviando...' : 'Enviar'}
            </button>
            {status.info.msg && (
              <p className={`mt-4 text-lg ${status.info.error ? 'text-red-500' : 'text-green-500'}`}>
                {status.info.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
