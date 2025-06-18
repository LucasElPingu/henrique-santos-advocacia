// ./src/components/Specialties.tsx
'use client';

import React, { useState } from 'react';
import styles from './Specialties.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, faBuilding, faShoppingCart, faHandHoldingHeart, faFileSignature, faGavel, 
  faCalculator, faKey, faGlobe, faBalanceScale, faStethoscope, faChartLine, faLandmark, 
  faLaptopCode, faUserClock, faFileInvoiceDollar, faHome, faBriefcase, faLeaf, 
  faPassport, faUniversity, faCreditCard 
} from '@fortawesome/free-solid-svg-icons';

// ALTERAÇÃO: As descrições foram atualizadas com o conteúdo final fornecido.
const specialtiesData = [
    { icon: faUsers, title: 'Direito de Família', description: 'Oferecemos atuação especializada em todas as questões familiares, como divórcios litigiosos e consensuais, dissolução de união estável, partilha de bens, guarda e regulamentação de convivência, pensão alimentícia, além de ações de reconhecimento ou dissolução de vínculos parentais. Trabalhamos com sensibilidade, discrição e foco na busca por soluções pacíficas, sempre zelando pelo bem-estar das partes envolvidas.' },
    { icon: faBuilding, title: 'Direito Empresarial', description: 'Prestamos assessoria completa para empresas de todos os portes, desde a constituição e estruturação societária até a elaboração de contratos empresariais, planejamento estratégico e recuperação judicial. Atuamos na prevenção de litígios, mitigação de riscos e suporte jurídico contínuo para promover a segurança e o crescimento sustentável dos negócios.' },
    { icon: faShoppingCart, title: 'Direito do Consumidor', description: 'Defendemos os interesses dos consumidores frente a práticas abusivas, produtos ou serviços defeituosos, cobranças indevidas e publicidade enganosa. Atuamos com rigor para garantir o respeito ao Código de Defesa do Consumidor, buscando reparação por danos materiais e morais, bem como o restabelecimento de direitos violados.' },
    { icon: faHandHoldingHeart, title: 'Direito Previdenciário', description: 'Oferecemos assessoria especializada para a concessão e revisão de benefícios previdenciários, incluindo aposentadorias, pensões, auxílios e benefícios por incapacidade. Acompanhamos processos administrativos junto ao INSS e, quando necessário, ingressamos com ações judiciais para garantir os direitos dos segurados.' },
    { icon: faFileSignature, title: 'Direito dos Contratos', description: 'Analisamos, redigimos e revisamos contratos civis e empresariais, assegurando clareza, equilíbrio e proteção jurídica para todas as partes. Atuamos na prevenção de litígios e oferecemos suporte estratégico na resolução de conflitos contratuais, garantindo o cumprimento dos termos pactuados.' },
    { icon: faGavel, title: 'Direito Criminal', description: 'Oferecemos defesa técnica e humanizada em todas as fases do processo penal, desde investigações e flagrantes até a atuação em juízo e tribunais superiores. Trabalhamos com ética e dedicação para assegurar o direito à ampla defesa, ao contraditório e à justa aplicação da lei penal.' },
    { icon: faCalculator, title: 'Direito Tributário', description: 'Prestamos consultoria para planejamento tributário e atuamos em defesas administrativas e judiciais contra cobranças indevidas. Oferecemos estratégias para reduzir legalmente a carga tributária, além de acompanhar execuções fiscais e fiscalizações, garantindo segurança nas operações financeiras.' },
    { icon: faKey, title: 'Direito Locatício e Condominial', description: 'Atuamos na elaboração e revisão de contratos de locação, ações de despejo, revisionais de aluguel e defesa de direitos tanto de locadores quanto de locatários. Prestamos assessoria jurídica para condomínios, administrando questões como inadimplência, assembleias e conflitos entre condôminos.' },
    { icon: faGlobe, title: 'Direito Internacional', description: 'Atendemos demandas que envolvem relações jurídicas internacionais, como homologação de sentenças estrangeiras, contratos internacionais, processos de extradição, imigração, consultoria para empresas com atuação global e assessoria em casamentos e divórcios com conexão estrangeira.' },
    { icon: faBalanceScale, title: 'Direito Civil', description: 'Nossa atuação abrange todas as relações jurídicas entre particulares, incluindo indenizações por danos materiais e morais, direito de propriedade, contratos, responsabilidade civil e questões possessórias. Buscamos sempre proteger os interesses dos nossos clientes de forma segura e eficaz.' },
    { icon: faStethoscope, title: 'Direito da Saúde', description: 'Defendemos os direitos dos pacientes contra negativas indevidas de cobertura por planos de saúde, buscando a liberação de medicamentos, cirurgias, tratamentos e procedimentos urgentes. Atuamos também em casos de erro médico e responsabilidade hospitalar, sempre com foco na preservação da saúde e da dignidade do cliente.' },
    { icon: faChartLine, title: 'Direito Econômico', description: 'Atuamos em defesa da livre concorrência e compliance concorrencial, assessorando empresas em processos administrativos junto ao CADE e outros órgãos reguladores. Oferecemos consultoria para prevenir práticas anticoncorrenciais e garantir conformidade com a legislação de mercado.' },
    { icon: faLandmark, title: 'Direito Administrativo Público', description: 'Representamos empresas e particulares em processos licitatórios e contratos administrativos. Defendemos servidores públicos em processos administrativos disciplinares (PAD) e atuamos em ações judiciais envolvendo o poder público, sempre com responsabilidade e conhecimento técnico.' },
    { icon: faLaptopCode, title: 'Direito Digital', description: 'Prestamos consultoria completa para adequação à Lei Geral de Proteção de Dados (LGPD), analisamos contratos digitais e atuamos em casos de crimes cibernéticos, fraudes eletrônicas, e responsabilidade por conteúdos online. Trabalhamos para proteger os interesses digitais de nossos clientes com seriedade e atualização constante.' },
    { icon: faUserClock, title: 'Direito das Sucessões', description: 'Assessoramos na elaboração de testamentos, planejamento sucessório e condução de inventários judiciais e extrajudiciais. Buscamos garantir a distribuição adequada dos bens e prevenir conflitos familiares, proporcionando segurança jurídica e respeito à vontade do falecido.' },
    { icon: faFileInvoiceDollar, title: 'Cobrança', description: 'Realizamos recuperação de créditos para empresas e pessoas físicas, com estratégias eficazes de cobrança extrajudicial e ações judiciais de execução. Nosso foco é garantir agilidade e eficiência na recuperação dos valores devidos.' },
    { icon: faHome, title: 'Usucapião', description: 'Atuamos na regularização de propriedades através de ações judiciais e procedimentos extrajudiciais de usucapião. Oferecemos suporte completo para quem busca obter o reconhecimento oficial da posse de um imóvel e a devida regularização documental.' },
    { icon: faBriefcase, title: 'Consultoria Judicial e Empresarial', description: 'Oferecemos consultoria jurídica estratégica para empresas e indivíduos, atuando de forma preventiva para minimizar riscos e evitar litígios futuros. Elaboramos pareceres técnicos e orientamos na tomada de decisões que impactam os negócios e o patrimônio pessoal.' },
    { icon: faLeaf, title: 'Consultoria Ambiental', description: 'Prestamos assessoria para empresas que precisam obter licenças ambientais, adaptar-se à legislação vigente ou responder a processos administrativos e judiciais por infrações ambientais. Atuamos com responsabilidade social e foco na sustentabilidade.' },
    { icon: faPassport, title: 'Cidadania', description: 'Assessoramos clientes na busca pelo reconhecimento de cidadania estrangeira, incluindo cidadania italiana, portuguesa, entre outras. Cuidamos de todo o trâmite de documentação e processos de naturalização, sempre com atenção aos detalhes e prazos.' },
    { icon: faUniversity, title: 'Direito em Concursos Públicos', description: 'Defendemos os direitos de candidatos em concursos públicos, atuando na impugnação de editais, recursos contra gabaritos e ações judiciais para garantir nomeação, posse e acesso a vagas quando os direitos forem violados.' },
    { icon: faCreditCard, title: 'Superendividamento', description: 'Prestamos assessoria especializada para pessoas físicas em situação de superendividamento, orientando na renegociação de dívidas e na aplicação da nova legislação que permite a reestruturação financeira e a recuperação da dignidade econômica do devedor.' },
];


export function Specialties() {
  const [selectedSpec, setSelectedSpec] = useState<typeof specialtiesData[0] | null>(null);

  const handleSelectSpec = (spec: typeof specialtiesData[0]) => {
    setSelectedSpec(spec);
  };

  const handleGoBack = () => {
    setSelectedSpec(null);
  };

  return (
    <section id="specialties" className={styles.container}>
      <h2 className={styles.title}>Nossas Especialidades</h2>
      
      <div className={styles.contentWrapper}>
        {selectedSpec ? (
          <div className={styles.detailsView}>
            <div className={styles.detailsTitleContainer}>
              <h3 className={styles.detailsTitle}>
                <FontAwesomeIcon icon={selectedSpec.icon} className={styles.cardIcon} />
                <span>{selectedSpec.title}</span>
              </h3>
              <button onClick={handleGoBack} className={styles.backButton}>Voltar</button>
            </div>
            <p className={styles.detailsDescription}>{selectedSpec.description}</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {specialtiesData.map((spec) => (
              <div key={spec.title} className={styles.card} onClick={() => handleSelectSpec(spec)}>
                <h3 className={styles.cardTitle}>
                  <FontAwesomeIcon icon={spec.icon} className={styles.cardIcon} />
                  <span>{spec.title}</span>
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
