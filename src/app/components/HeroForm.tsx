// ./src/components/HeroForm.tsx
"use client";

import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./HeroForm.module.css";

export function HeroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      console.error("Formspree endpoint URL is not defined.");
      setFormStatus({
        submitted: true,
        success: false,
        message: "Erro de configuração do formulário.",
      });
      setIsLoading(false);
      return;
    }

    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Por favor, preencha todos os campos.",
      });
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Por favor, insira um e-mail válido.",
      });
      setIsLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name.trim());
    formDataToSend.append("email", email.trim());
    formDataToSend.append("phone", phone.trim());
    formDataToSend.append("message", message.trim());

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message:
            "Mensagem enviada com sucesso! Entraremos em contacto em breve.",
        });
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        let errorMsg =
          "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.";
        try {
          const responseData = await response.json();
          if (responseData?.error) {
            errorMsg = responseData.error;
          }
        } catch {
          errorMsg = `Erro ${response.status}: ${response.statusText}`;
        }
        setFormStatus({ submitted: true, success: false, message: errorMsg });
        console.error("Formspree error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      setFormStatus({
        submitted: true,
        success: false,
        message: `Erro de rede: ${errorMessage}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formTitleContainer}>
        <FontAwesomeIcon icon={faAddressBook} className={styles.titleIcon} />
        <h2 className={styles.formTitle}>Converse com um especialista</h2>
      </div>
      <p className={styles.formSubtitle}>
        Preencha o formulário abaixo e retornaremos o seu contato.
      </p>

      <div className={styles.formGroup}>
        <div className={styles.inputIcon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <input
          type="text"
          placeholder="Nome completo"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputIcon}>
          <FontAwesomeIcon icon={faPhoneVolume} />
        </div>
        <input
          type="tel"
          placeholder="00 00000-0000"
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputIcon}>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <textarea
          placeholder="Digite sua mensagem aqui..."
          className={`${styles.input} ${styles.textarea}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isLoading}
      >
        {isLoading ? "Enviando..." : "Solicitar Contato"}
      </button>

      {formStatus.submitted && (
        <div
          className={`${styles.formMessage} ${
            formStatus.success ? styles.successMessage : styles.errorMessage
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </form>
  );
}
