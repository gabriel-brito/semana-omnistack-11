import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import API from '../../services/api';

import './style.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  useEffect(() => {
    API.get('profile', {
      headers: { Authorization: ongId}
    }).then(response => setIncidents(response.data));
  }, [ongId]);

  async function handleDeleteIncident(id){
    try {
      await API.delete(`incidents/${id}`, 
        { headers: { Authorization: ongId }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Erro ao deletar caso.');
    }
  };

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  };

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the Hero' />
        <span>
          Bem vinda, <strong>{ongName}</strong>!
        </span>

        <Link className='button' to='/incidents/new'>
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout} type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(({ id, title, description, value }) => (
          <li key={id}>
            <strong>CASO:</strong>
            <p>{title}</p>
            <strong>DESCRIÇÃO:</strong>
            <p>{description}</p>
            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(value)}
            </p>

            <button onClick={() => handleDeleteIncident(id)} type='button'>
              <FiTrash2 size={20} color='#E02041' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};