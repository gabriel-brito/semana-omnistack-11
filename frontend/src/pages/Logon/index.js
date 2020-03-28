import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import API from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon(){
  const [id, setId] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    
    try {
      const response = await API.post('session', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Seu login falhou. Tente novamente.')
    }
  };

  return (
    <div className='logon-container'>
      <section className='form'>
        <img src={logoImg} alt='Be the Hero' />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type='text'
            placeholder='Seu ID'
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className='button' type='submit'>
            Entrar
          </button>

          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='e02041' />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt='Heroes' />
    </div>
  );
};