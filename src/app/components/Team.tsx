// ./src/components/Team.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Team.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const teamData = [
  { 
    name: 'Dr. Henrique Santos', 
    position: 'Advogado Fundador',
    bio: 'Advogado, pós-graduado em Direito do Trabalho e Direito Civil, com experiência comprovada nas áreas de direito do trabalho, direito do consumidor, direito previdenciário, direito de família, direito tributário, entre outras áreas do direito.',
    instagramUrl: 'https://www.instagram.com/henriquesantos.advogado/',
    imageUrl: '/images/henrique.jpg'
  },
  { 
    name: 'Dr. Hugo Pedrosa de Souza', 
    position: 'Advogado Co-Fundador',
    bio: 'Assessor Jurídico da Procuradoria Setorial da Secretaria da Administração de João Pessoa, advogado com experiência comprovada nas áreas de direito do consumidor, direito civil, direito de família, direito empresarial, entre outras áreas de direito privado.',
    instagramUrl: 'https://www.instagram.com/hugopedrosa.adv/',
    imageUrl: '/images/hugo.jpg'
  },
  { 
    name: 'Dr. Matheus Maia', 
    position: 'Advogado Associado',
    bio: 'Especialista em Processo Penal e Direito Penal, com dedicação à defesa dos direitos e garantias individuais em todas as esferas da justiça criminal. A sua prática combina profundo conhecimento técnico com uma atuação combativa e estratégica.',
    instagramUrl: 'https://www.instagram.com/drmatheusmaia_/',
    imageUrl: '/images/matheus.jpg'
  }
];

export function Team() {
  // O estado para controlar qual membro está selecionado vive apenas dentro deste componente.
  const [selectedMember, setSelectedMember] = useState<typeof teamData[0] | null>(null);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Conheça a Nossa Equipe</h2>

      <div className={styles.contentWrapper}>
        {selectedMember ? (
          <div className={styles.detailsView}>
            <div className={styles.detailsImageContainer}>
              <Image
                src={selectedMember.imageUrl}
                alt={`Foto de ${selectedMember.name}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.textColumn}>
              <div className={styles.detailsNameContainer}>
                <h3 className={styles.detailsName}>{selectedMember.name}</h3>
                <a href={selectedMember.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <p className={styles.detailsPosition}>{selectedMember.position}</p>
              <p className={styles.detailsBio}>{selectedMember.bio}</p>
              <div className={styles.backButtonContainer}>
                <button onClick={() => setSelectedMember(null)} className={styles.backButton}>
                  Voltar
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.grid}>
            {teamData.map((member) => (
              <div key={member.name} className={styles.card}>
                <div 
                  className={styles.imageContainer}
                  onClick={() => setSelectedMember(member)}
                >
                  <Image
                    src={member.imageUrl}
                    alt={`Foto de ${member.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberPosition}>{member.position}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
