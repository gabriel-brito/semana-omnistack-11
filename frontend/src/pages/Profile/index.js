import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import './style.css';

export default function Profile() {
  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt='Be the Hero' />
        <span>
          Bem vinda, <strong>APAD!</strong>!
        </span>

        <Link className='button' to='/incidents/new'>
          Cadastrar novo caso
        </Link>
        <button type='button'>
          <FiPower size={18} color='#E02041' />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Cadela josefá</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição</p>
          <strong>VALOR:</strong>
          <p>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(1200)}
          </p>

          <button type='button'>
            <FiTrash2 size={20} color='#E02041' />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Cadela josefá</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição</p>
          <strong>VALOR:</strong>
          <p>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(1200)}
          </p>

          <button type='button'>
            <FiTrash2 size={20} color='#E02041' />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Cadela josefá</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição</p>
          <strong>VALOR:</strong>
          <p>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(1200)}
          </p>

          <button type='button'>
            <FiTrash2 size={20} color='#E02041' />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Cadela josefá</p>
          <strong>DESCRIÇÃO:</strong>
          <p>Descrição</p>
          <strong>VALOR:</strong>
          <p>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(1200)}
          </p>

          <button type='button'>
            <FiTrash2 size={20} color='#E02041' />
          </button>
        </li>
      </ul>
    </div>
  );
};