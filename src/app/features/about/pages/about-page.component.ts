import { Component, OnDestroy } from '@angular/core';

interface CareerStage {
  role: string;
  company: string;
  sector: string;
  period: string;
  client?: string;
  area: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

interface CareerPosition extends CareerStage {
  number: string;
}

interface CareerGroup {
  company: string;
  positions: CareerPosition[];
}

interface SideQuest {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent implements OnDestroy {
  readonly careerStages: CareerStage[] = [
    {
      role: 'Analista de Testes/QA',
      company: 'Spread Tecnologia',
      sector: 'Telecom',
      period: 'Março de 2026 — atual',
      client: 'Cliente: Claro',
      area: 'Telecomunicações, Open Finance, redes HFC e 5G',
      summary:
        'Atuação em projetos estratégicos para a Claro, com foco em qualidade de software para telecomunicações, Open Finance, integrações com parceiros como o Nubank e sistemas corporativos de alta disponibilidade.',
      highlights: [
        'Planejamento e execução de testes funcionais, não funcionais e de APIs, com validação de integrações entre sistemas e parceiros.',
        'Desenvolvimento e manutenção de automações E2E com Cypress e TypeScript para fluxos críticos e regressão.',
        'Execução de testes de regressão, homologação e validação de funcionalidades críticas, com geração e análise de evidências.',
        'Análise de requisitos, elaboração de cenários de teste e acompanhamento de defeitos utilizando Azure DevOps.',
        'Testes de performance com LoadRunner (VuGen, Controller e Analysis), incluindo carga, estresse, capacidade, volume, escalabilidade, pico e resistência.',
        'Análise de resultados de performance para identificar gargalos e apoiar a evolução dos sistemas.',
        'Aplicação de IA em testes por meio de engenharia de prompts, instruções para automação e desenvolvimento de skills customizadas.',
        'Utilização de Model Context Protocol (MCP), Git/GitLab, Jenkins e práticas ágeis Scrum.',
      ],
      stack: [
        'Cypress',
        'TypeScript',
        'Postman (APIs)',
        'LoadRunner (VuGen, Controller, Analysis)',
        'C',
        'Git / GitLab',
        'Azure DevOps',
        'Jira',
        'Jenkins',
        'Scrum',
        'Engenharia de Prompts',
        'Skills customizadas',
        'MCP',
      ],
    },
    {
      role: 'Analista de Testes/QA Sênior',
      company: 'Itaú Unibanco',
      sector: 'Banco | Finanças',
      period: 'Maio de 2023 — Março de 2026',
      area: 'Squad de Crédito e Empréstimos',
      summary:
        'Atuação na squad de Crédito e Empréstimos, responsável pela qualidade das soluções relacionadas à concessão de crédito, contratação de empréstimos e gestão contratual.',
      highlights: [
        'Liderança técnica da squad de QA, com planejamento, priorização e definição da estratégia de testes.',
        'Desenvolvimento e evolução de frameworks de automação web com Playwright, Cypress e APIs REST com REST Assured.',
        'Criação e manutenção de cenários automatizados com BDD, Gherkin e Cucumber.',
        'Integração e acompanhamento de testes automatizados em pipelines CI/CD com Jenkins.',
        'Planejamento, execução e análise de testes funcionais, integrados, regressivos e de performance.',
        'Preparação de massas de dados, investigação de defeitos e validação de integrações e regras de negócio.',
        'Uso de Git, SQL, Jira e Splunk no suporte às atividades de qualidade e automação.',
        'Uso de Microsoft Copilot para análise de requisitos, criação de cenários de teste e documentação técnica.',
        'Definição de métricas, evolução de processos de qualidade e mentoria técnica para o time de QA.',
        'Colaboração com desenvolvedores, Product Owners, arquitetos, SREs e stakeholders.',
      ],
      stack: [
        'Playwright (TypeScript)',
        'Cypress (TypeScript)',
        'REST Assured (Java)',
        'JUnit (Java)',
        'Postman',
        'JMeter / LoadRunner',
        'SQL',
        'AWS',
        'Git',
        'Jenkins',
        'Splunk',
        'Jira/Xray',
        'Scrum',
        'Microsoft Copilot',
      ],
    },
    {
      role: 'Analista de Testes/QA Pleno',
      company: 'Itaú Unibanco',
      sector: 'Banco | Finanças',
      period: 'Outubro de 2022 — Maio de 2023',
      area: 'Squad de Cartões',
      summary:
        'Atuação na squad de Cartões, validando os produtos Pague Contas, Parcelamento e Faturas por meio de testes, automação e validação de integrações entre sistemas.',
      highlights: [
        'Análise de requisitos funcionais e técnicos para apoiar a definição da estratégia de testes.',
        'Elaboração e execução de testes funcionais, regressivos, integrados e exploratórios.',
        'Desenvolvimento e manutenção de testes automatizados web com Selenium e Java.',
        'Validação e automação de APIs REST com Postman e REST Assured/Java.',
        'Planejamento, execução e análise de testes de performance com LoadRunner.',
        'Preparação de massas de dados, homologação de funcionalidades e validação de regras de negócio.',
        'Identificação, registro, análise e acompanhamento de defeitos no Jira.',
        'Versionamento dos projetos de automação com Git.',
        'Participação em cerimônias ágeis e colaboração com desenvolvimento e produto.',
        'Criação e manutenção de cenários BDD com Gherkin e Cucumber.',
        'Integração e execução de testes automatizados em pipelines CI/CD com Jenkins.',
        'Evolução da automação, aumento da cobertura de testes e disseminação de conhecimento.',
        'Uso de Microsoft Copilot para apoiar a criação de cenários, documentação e análises.',
      ],
      stack: [
        'Selenium (Java)',
        'REST Assured (Java)',
        'JUnit (Java)',
        'Postman',
        'LoadRunner',
        'Git',
        'Jenkins',
        'Jira/Xray',
        'Scrum',
        'Microsoft Copilot',
      ],
    },
    {
      role: 'Analista de Testes/QA Júnior',
      company: 'Itaú Unibanco',
      sector: 'Banco | Finanças',
      period: 'Junho de 2021 — Outubro de 2022',
      area: 'Squad de Cartões — Faturas e Pagamentos',
      summary:
        'Atuação em QA no ambiente bancário, apoiando a squad de Cartões nas jornadas de Faturas e Pagamentos e na validação de funcionalidades críticas para o negócio.',
      highlights: [
        'Execução de testes manuais funcionais, regressivos, integrados e de integração.',
        'Criação de cenários, casos e roteiros de teste.',
        'Validação de funcionalidades em aplicações web, APIs e serviços.',
        'Gestão e rastreabilidade de testes utilizando Zephyr.',
        'Criação e execução de cenários com TDD, BDD e Cucumber.',
        'Identificação, registro e acompanhamento de defeitos.',
        'Preparação de massas de dados e validação de regras de cartões, faturamento e pagamentos.',
        'Desenvolvimento, manutenção e execução de automações web com Selenium e Java.',
        'Criação de automações para ampliar a cobertura e confiabilidade das entregas.',
        'Validação de APIs e serviços com Postman e automação REST com REST Assured/Java.',
        'Apoio na execução de testes de performance com LoadRunner.',
        'Suporte a homologações e garantia da qualidade das entregas.',
        'Versionamento dos projetos de automação com Git.',
        'Identificação de cenários passíveis de automação para ampliar cobertura e eficiência.',
        'Participação em times Scrum e apoio à integração de testes em pipelines CI/CD.',
      ],
      stack: [
        'Selenium (Java)',
        'REST Assured (Java)',
        'JUnit (Java)',
        'Postman',
        'LoadRunner',
        'Git',
        'Jenkins (CI/CD)',
        'Jira/Zephyr',
        'Scrum',
      ],
    },
    {
      role: 'Analista de Testes/QA Júnior',
      company: 'BRQ Digital Solutions',
      sector: 'Banco | Finanças',
      period: 'Outubro de 2019 — Junho de 2021',
      client: 'Cliente: BTG Pactual',
      area: 'Investimentos digitais, APIs e microsserviços',
      summary:
        'Atuação em projetos de Engenharia da Qualidade de Software para o BTG Pactual, na plataforma de Investimentos Digitais, garantindo a confiabilidade de aplicações web, APIs e arquiteturas de microsserviços.',
      highlights: [
        'Planejamento e execução de testes, elaboração de roteiros, preparação de ambientes e validação de requisitos.',
        'Validação de APIs e microsserviços utilizando Postman.',
        'Desenvolvimento, manutenção e evolução de testes automatizados com Java.',
        'Criação e manutenção de automações web com Selenium e Cypress/TypeScript, Page Objects e comandos customizados.',
        'Desenvolvimento e execução de testes automatizados para APIs REST.',
        'Versionamento dos projetos de automação utilizando Git.',
        'Identificação de cenários automatizáveis para aumentar a cobertura e a eficiência dos testes.',
        'Análise de dados com SQL e acompanhamento de defeitos no Azure DevOps e Jira.',
        'Integração de testes automatizados em pipelines CI/CD para promover qualidade contínua.',
        'Participação em times ágeis Scrum e colaboração com equipes de desenvolvimento durante todo o ciclo.',
      ],
      stack: [
        'Java',
        'Selenium',
        'JavaScript',
        'Cypress',
        'TypeScript',
        'Postman',
        'Azure DevOps',
        'Jira',
        'SQL',
        'Git',
        'CI/CD',
        'Jenkins',
      ],
    },
    {
      role: 'Técnico de TI | Analista de Testes',
      company: 'Grupo Recovery',
      sector: 'Telecom',
      period: 'Agosto de 2018 — Agosto de 2019',
      area: 'Suporte, sustentação e início em QA',
      summary:
        'Atuei com suporte técnico e sustentação de ambientes, garantindo o funcionamento adequado de sistemas, aplicações e infraestrutura. Nesse período, também comecei a validar sistemas e iniciei minha trajetória em Qualidade de Software (QA).',
      highlights: [
        'Suporte técnico a usuários de níveis 1 e 2, incluindo instalação e configuração de softwares e equipamentos.',
        'Manutenção e suporte a ambientes Windows e aplicações corporativas.',
        'Atendimento e resolução de incidentes por meio de ferramentas de chamados.',
        'Apoio na análise de falhas em sistemas e aplicações.',
        'Execução de testes manuais exploratórios e regressivos para validar funcionalidades.',
        'Identificação e registro de bugs, apoiando o time de desenvolvimento na correção.',
        'Apoio na criação de cenários e casos de teste.',
      ],
      stack: [
        'Windows / Windows Server',
        'SQL (consultas básicas)',
        'Postman (validação de APIs)',
        'Jira / ferramentas de chamados',
      ],
    },
  ];

  readonly teachingSideQuest: SideQuest = {
    company: 'Ctrl+Play',
    role: 'Professor de Quality Assurance',
    period: 'Maio de 2025 — Julho de 2026',
    summary:
      'Aulas de QA para alunos de 7 a 17 anos, com atividades práticas sobre testes e identificação de bugs.',
    stack: ['QA', 'Testes', 'Lógica', 'Ensino'],
  };

  readonly careerGroups = this.groupCareerStages();
  readonly careerJourney = this.careerGroups.flatMap((group) => group.positions);
  careerJourneyIndex = this.careerJourney.length - 1;
  careerJourneyStarted = false;
  careerJourneyComplete = false;
  careerControllerStowing = false;
  private careerControllerStowTimer?: ReturnType<typeof setTimeout>;

  readonly coreSkills = [
    'Automação E2E',
    'Testes de API',
    'Testes de performance',
    'Estratégia de testes',
    'Liderança técnica',
    'BDD / Gherkin',
    'CI/CD',
    'IA aplicada a QA',
  ];

  get careerJourneyStatus(): string {
    if (this.careerJourneyComplete) {
      return 'JORNADA COMPLETA — VOCÊ CHEGOU À EXPERIÊNCIA ATUAL';
    }

    const currentPosition = this.careerJourney[this.careerJourneyIndex];

    return `${this.careerJourney.length - this.careerJourneyIndex} / ${this.careerJourney.length} FASES — ${currentPosition.company}`;
  }

  startCareerJourney(): void {
    this.clearCareerControllerStowTimer();
    this.careerControllerStowing = false;
    this.careerJourneyStarted = true;
    this.careerJourneyComplete = false;
    this.careerJourneyIndex = this.careerJourney.length - 1;
    this.scrollToCareerPosition(this.careerJourney[this.careerJourneyIndex]);
  }

  moveCareerJourney(direction: 'up' | 'down'): void {
    if (direction === 'up' && this.careerJourneyIndex > 0) {
      this.careerJourneyIndex -= 1;
      this.careerJourneyComplete = this.careerJourneyIndex === 0;
    } else if (direction === 'down' && this.careerJourneyIndex < this.careerJourney.length - 1) {
      this.careerJourneyIndex += 1;
      this.careerJourneyComplete = false;
    } else {
      return;
    }

    this.scrollToCareerPosition(this.careerJourney[this.careerJourneyIndex]);
  }

  storeCareerController(): void {
    this.careerControllerStowing = true;
    this.clearCareerControllerStowTimer();
    this.careerControllerStowTimer = setTimeout(() => {
      this.careerJourneyStarted = false;
      this.careerControllerStowing = false;
      this.careerControllerStowTimer = undefined;
    }, 900);
  }

  ngOnDestroy(): void {
    this.clearCareerControllerStowTimer();
  }

  private groupCareerStages(): CareerGroup[] {
    const groups: CareerGroup[] = [];

    this.careerStages.forEach((stage, index) => {
      let group = groups.find((item) => item.company === stage.company);

      if (!group) {
        group = { company: stage.company, positions: [] };
        groups.push(group);
      }

      group.positions.push({
        ...stage,
        number: (this.careerStages.length - index).toString().padStart(2, '0'),
      });
    });

    return groups;
  }

  private scrollToCareerPosition(position: CareerPosition): void {
    const target = document.getElementById(`career-stage-${position.number}`);

    if (!target) {
      throw new Error(`Career stage ${position.number} was not found in the page.`);
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.focus({ preventScroll: true });
  }

  private clearCareerControllerStowTimer(): void {
    if (this.careerControllerStowTimer !== undefined) {
      clearTimeout(this.careerControllerStowTimer);
      this.careerControllerStowTimer = undefined;
    }
  }
}
