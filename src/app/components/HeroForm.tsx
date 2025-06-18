// ./src/components/HeroForm.tsx
'use client'; 

import React, { useState } from 'react';
import styles from './HeroForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faUser, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export function HeroForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
      message,
    };

    // Lê o URL do endpoint a partir das variáveis de ambiente
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      console.error("Formspree endpoint URL is not defined.");
      setFormStatus({ submitted: true, success: false, message: 'Erro de configuração do formulário.' });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, success: true, message: 'Mensagem enviada com sucesso! Entraremos em contacto em breve.' });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setFormStatus({ submitted: true, success: false, message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.' });
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFormStatus({ submitted: true, success: false, message: 'Ocorreu um erro de rede. Verifique a sua conexão.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formTitleContainer}>
        <FontAwesomeIcon icon={faAddressBook} className={styles.titleIcon} />
        <h2 className={styles.formTitle}>Converse com um especialista</h2>
      </div>
      <p className={styles.formSubtitle}>Preencha o formulário abaixo e retornaremos o seu contato.</p>
      
      <div className={styles.formGroup}>
        <div className={styles.inputIcon}><FontAwesomeIcon icon={faUser} /></div>
        <input type="text" placeholder="Nome completo" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      
      <div className={styles.formGroup}>
        <div className={styles.inputIcon}><FontAwesomeIcon icon={faPhoneVolume} /></div>
        <input type="tel" placeholder="00 00000-0000" className={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      
      <div className={styles.formGroup}>
        <div className={styles.inputIcon}><FontAwesomeIcon icon={faEnvelope} /></div>
        <input type="email" placeholder="Seu melhor e-mail" className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className={styles.formGroup}>
        <textarea placeholder="Digite sua mensagem aqui..." className={`${styles.input} ${styles.textarea}`} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      
      <button type="submit" className={styles.submitButton}>
        Solicitar Contato
      </button>

      {formStatus.submitted && (
        <div className={`${styles.formMessage} ${formStatus.success ? styles.successMessage : styles.errorMessage}`}>
          {formStatus.message}
        </div>
      )}
    </form>
  );
}
