import Permesso from '../images/permessisoggiorno.svg'
import Asilo from '../images/asilo.svg'
import Bonus from '../images/bonus.svg'
import Casa from '../images/casa.svg'
import Certificati from '../images/certificati.svg'
import Cittadinanza from '../images/cittadinanza.svg'
import Corsi from '../images/corsi.svg'
import Famiglia from '../images/famiglia.svg'
import Flussi from '../images/flussi.svg'
import Formazione from '../images/formazione.svg'
import Isee from '../images/isee.svg'
import Legale from '../images/legale.svg'
import Lingue from '../images/lingue.svg'
import Naspi from '../images/naspi.svg'
import Psicologo from '../images/psicologo.svg'
import Residenza from '../images/residenza.svg'
import Spid from '../images/spid.svg'
import Sprar from '../images/sprar.svg'
import Studi from '../images/studi.svg'
import Consulenze from '../images/consulenze.svg'

const lang = ['ita', 'eng']

const services = {
  ita: [
    {
      id: 1,
      icon: <Permesso />,
      text: 'Rilascio e rinnovo permesso di soggiorno',
      data: {
        documenti: {},
        numberToCall: false,
      },
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
    },
    {
      id: 2,
      icon: <Asilo />,
      text: 'Richiesta Asilo',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'richiesta-asilo',
    },
    {
      id: 3,
      icon: <Sprar />,
      text: 'Richiesta inserimento SPRAR-SAI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'richiesta-inserimento-sprar-sai',
    },
    {
      id: 4,
      icon: <Casa />,
      text: 'Ricerca soluzione abitativa',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'ricerca-soluzione-abitativa',
    },
    {
      id: 5,
      icon: <Cittadinanza />,
      text: 'Citadinanza italiana',
      data: {
        documenti: {},
        numberToCall: false,
      },
      slug: 'citadinanza-italiana',
    },
    {
      id: 6,
      icon: <Residenza />,
      text: 'AGGIORNAMENTO DOCUMENTI E CAMBIO RESIDENZA',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'aggiornamento-documenti-e-cambio-residenza',
    },
    {
      id: 7,
      icon: <Certificati />,
      text: 'PRENOTAZIONE CERTIFICATI (CARICHI PENDENTI..)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'prenotazione-certificati-carichi-pendenti',
    },
    {
      id: 8,
      icon: <Corsi />,
      text: 'ISCRIZIONE CORSI SCOLASTICI ED ESAMI DI LINGUA DA A1 A B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
    },
    {
      id: 9,
      icon: <Formazione />,
      text: 'Iscrizione corsi di formazione professionale',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'iscrizione-corsi-di-formazione-professionale',
    },
    {
      id: 10,
      icon: <Studi />,
      text: 'Traduzione e assistenza nel riconoscimento dei titoli di studio',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
    },
    {
      id: 11,
      icon: <Famiglia />,
      text: 'Ricongiungimento e coesione familiare',
      data: {
        documenti: {},
        numberToCall: false,
      },
      slug: 'ricongiungimento-e-coesione-familiare',
    },
    {
      id: 12,
      icon: <Spid />,
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid',
    },
    {
      id: 13,
      icon: <Isee />,
      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee',
    },
    {
      id: 14,
      icon: <Naspi />,
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi',
    },
    {
      id: 15,
      icon: <Bonus />,
      text: 'Bonus e sussidi',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'bonus-e-sussidi',
    },
    {
      id: 16,
      icon: <Flussi />,
      text: 'EMERSIONE E DECRETO FLUSSI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'emersione-e-decreto-flussi',
    },
    {
      id: 17,
      icon: <Legale />,
      text: 'Assistenza legale',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'assistenza-legale',
    },
    {
      id: 18,
      icon: <Psicologo />,
      text: 'Assistenza psicologica',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'assistenza-psicologica',
    },
    {
      id: 19,
      icon: <Lingue />,
      text: 'Mediazioni linguistiche',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'mediazioni-lingue',
    },
    {
      id: 20,
      icon: <Consulenze />,
      text: 'Consulenze',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'consulenze',
    },
  ],
  eng: [
    {
      id: 1,
      icon: <Permesso />,
      text: 'Relase and renewal of residency permit',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'relase-and-renewal-of-residency-permit',
    },
    {
      id: 2,
      icon: <Asilo />,
      text: 'Aylum request',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'aylum-request',
    },
    {
      id: 3,
      icon: <Sprar />,
      text: 'Request for accomodation SPRAR-SAI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'request-for-accomodation-sprar-sai',
    },
    {
      id: 4,
      icon: <Casa />,
      text: 'Search for a housing solution',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'search-for-a-housing-solution',
    },
    {
      id: 5,
      icon: <Cittadinanza />,
      text: 'Italian citizenship',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'italian-citizenship',
    },
    {
      id: 6,
      icon: <Residenza />,
      text: 'Document update and change of residence',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'document-update-and-change-of-residence',
    },
    {
      id: 7,
      icon: <Certificati />,
      text: 'Reservation certificates (“carichi pendenti”..)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'reservation-certificates-carichi-pendenti',
    },
    {
      id: 8,
      icon: <Corsi />,
      text: 'Enrolement in school courses and language exams (A1 A B2)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'enrolement-in-school-courses-and-language-exams-a1-a-b2',
    },
    {
      id: 9,
      icon: <Formazione />,
      text: 'Enrolement in training courses',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'enrolement-in-training-courses',
    },
    {
      id: 10,
      icon: <Studi />,
      text: 'Help for translation and recognition of school qualifications',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'help-for-translation-and-recognition-of-school-qualifications',
    },
    {
      id: 11,
      icon: <Famiglia />,
      text: 'Family reunification',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'family-reunification',
    },
    {
      id: 12,
      icon: <Spid />,
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid',
    },
    {
      id: 13,
      icon: <Isee />,
      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee',
    },
    {
      id: 14,
      icon: <Naspi />,
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi',
    },
    {
      id: 15,
      icon: <Bonus />,
      text: 'Bonus and benefits',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'bonus-and-benefits',
    },
    {
      id: 16,
      icon: <Flussi />,
      text: 'Emersion and flows decree',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'emersion-and-flows-decree',
    },
    {
      id: 17,
      icon: <Legale />,
      text: 'Legal assistance',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'legal-assistance',
    },
    {
      id: 18,
      icon: <Psicologo />,
      text: 'Psychological assistance',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'psychological-assistance',
    },
    {
      id: 19,
      icon: <Lingue />,
      text: 'Language mediation',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'language-mediation',
    },
    {
      id: 20,
      icon: <Consulenze />,
      text: 'Consulting',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'consulting',
    },
  ],
  rus: [
    {
      icon: <Permesso />,
      text: 'подготовка документов для получения или продления вида на жительство',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'подготовка-документов-для-получения-или-продления-вида-на-жительство',
    },
    {
      icon: <Asilo />,
      text: 'помощь в подаче прошения о политическом убежище',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'помощь-в-подаче-прошения-о-политическом-убежище',
    },
    {
      icon: <Sprar />,
      text: 'помощь в подаче прошения о включении в программу SPRAR-SAI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'помощь-в-подаче-прошения-о-включении-в-программу-sprar-sai',
    },
    {
      icon: <Casa />,
      text: 'поиск жилья',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'поиск-жилья',
    },
    {
      icon: <Cittadinanza />,
      text: 'подача документов для итальянского гражданства',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'подача-документов-для-итальянского-гражданства',
    },
    {
      icon: <Residenza />,
      text: 'обновление документов и смена регистрации места жительства',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'обновление-документов-и-смена-регистрации-места-жительства',
    },
    {
      icon: <Certificati />,
      text: 'подготовка справки по незавершённым платежам',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'подготовка-справки-по-незавершённым-платежам',
    },
    {
      icon: <Corsi />,
      text: 'направление на Курси ( общеобразовательные и языковые), екзамены по итальянскому языку от А1 до В2',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'направление-на-курси-общеобразовательные-и-языковые-екзамены-по-итальянскому-языку-от-а1-до-в2',
    },
    {
      icon: <Formazione />,
      text: 'Организация курсов профессиональной подготовки',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'организация-курсов-профессиональной-подготовки',
    },
    {
      icon: <Studi />,
      text: '',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '',
    },
    {
      icon: <Famiglia />,
      text: 'перевод и легализация документов необходимых для воссоединения семьи',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'перевод-и-легализация-документов-необходимых-для-воссоединения-семьи',
    },
    {
      icon: <Spid />,
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid',
    },
    {
      icon: <Isee />,
      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee',
    },
    {
      icon: <Naspi />,
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi',
    },
    {
      icon: <Bonus />,
      text: 'помощь в получении бонусов и субсидий',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'помощь-в-получении-бонусов-и-субсидий',
    },
    {
      icon: <Flussi />,
      text: 'помощь в отслеживании выхода декретов Flussi ( рабочая иммиграция)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'помощь-в-отслеживании-выхода-декретов-flussi-рабочая-иммиграция',
    },
    {
      icon: <Legale />,
      text: 'юридическая помощь',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'юридическая-помощь',
    },
    {
      icon: <Psicologo />,
      text: 'помощь психолога',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'помощь-психолога',
    },
    {
      icon: <Lingue />,
      text: ' Услуги медиатора ( переводчика)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'услуги-медиатора-переводчика',
    },
    {
      icon: <Consulenze />,
      text: 'консультации',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'консультации',
    },
  ],
  bra: [
    {
      icon: <Permesso />,
      text: 'Emissão / renovação de permissão de residência',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'emissão-renovação-permissão-residência',
    },
    {
      icon: <Asilo />,
      text: 'Pedido de asilo',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'pedido-de-asilo',
    },
    {
      icon: <Sprar />,
      text: 'Pedido de inclusão no projeto sprar / sai',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'pedido-de-inclusão-no-projeto-sprar-sai',
    },
    {
      icon: <Casa />,
      text: 'Procurar uma solução de alojamento',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'procurar-uma-solução-de-alojamento',
    },
    {
      icon: <Cittadinanza />,
      text: 'Cidadania italiana',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'cidadania-italiana',
    },
    {
      icon: <Residenza />,
      text: 'Atualização de documentos e mudança de residência',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'atualização-de-documentos-e-mudança-de-residência',
    },
    {
      icon: <Certificati />,
      text: 'Reserva certidão (eventuais processos criminais em curso..)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'reserva-certidão-eventuais-processos-criminais-em-curso',
    },
    {
      icon: <Corsi />,
      text: 'Matrícula escolar e teste de idioma de A1 a B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'matrícula-escolar-e-teste-de-idioma-de-a1-a-b2',
    },
    {
      icon: <Formazione />,
      text: 'Matrícula em curso de formação',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'matrícula-em-curso-de-formação',
    },
    {
      icon: <Studi />,
      text: 'Tradução e reconhecimento de qualificações',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'tradução-e-reconhecimento-de-qualificações',
    },
    {
      icon: <Famiglia />,
      text: 'Reunificação familiar',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'reunificação-familiar',
    },
    {
      icon: <Spid />,
      text: 'Spid: (identidade digital)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid',
    },
    {
      icon: <Isee />,
      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee',
    },
    {
      icon: <Naspi />,
      text: 'NASPI: (subsídio de desemprego)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi',
    },
    {
      icon: <Bonus />,
      text: 'Bônus e subvenções',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'bonus-e-subvenções',
    },
    {
      icon: <Flussi />,
      text: 'Emersão e decreto de fluxos',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'emersão-e-decreto-de-fluxos',
    },
    {
      icon: <Legale />,
      text: 'Assistência judiciária',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'assistência-judiciária',
    },
    {
      icon: <Psicologo />,
      text: 'Aconselhamento',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'aconselhamento',
    },
    {
      icon: <Lingue />,
      text: 'Mediação linguística',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'medição-linguística',
    },
    {
      icon: <Consulenze />,
      text: 'Consultoria',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'consultoria',
    },
  ],
  spa: [
    {
      icon: <Permesso />,
      text: 'Solicitud y renovación del permiso de residencia',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'solicitud-y-renovación-del-permiso-de-residencia',
    },
    {
      icon: <Asilo />,
      text: 'Petición de asilo',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'petición-de-asilo',
    },
    {
      icon: <Sprar />,
      text: '',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '',
    },
    {
      icon: <Casa />,
      text: 'Búsqueda de vivienda',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'búsqueda-de-vivienda',
    },
    {
      icon: <Cittadinanza />,
      text: 'Ciudadanía italiana',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'ciudadanía-italiana',
    },
    {
      icon: <Residenza />,
      text: 'Actualización de documentos y cambio de residencia',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'actualización-de-documentos-y-cambio-de-residencia',
    },
    {
      icon: <Certificati />,
      text: 'Reservar  el certificado de cargos pendientes',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'reservar-el-certificado-de-cargos-pendientes',
    },
    {
      icon: <Corsi />,
      text: 'Inscripción en cursos escolares y exámenes de idiomas a1 a B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'inscripción-en-cursos-escolares-y-exámenes-de-idiomas-a1-a-b2',
    },
    {
      icon: <Formazione />,
      text: 'Inscripción en cursos de formación',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'inscripción-en-cursos-de-formación',
    },
    {
      icon: <Studi />,
      text: 'Traducción y reconocimiento de títulos',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'traducción-y-reconocimiento-de-títulos',
    },
    {
      icon: <Famiglia />,
      text: 'Reunificación familiar',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'reunificación-familiar',
    },
    {
      icon: <Spid />,
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid',
    },
    {
      icon: <Isee />,
      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee',
    },
    {
      icon: <Naspi />,
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi',
    },
    {
      icon: <Bonus />,
      text: 'Bonus y subvencione',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'bonus-y-subvencione',
    },
    {
      icon: <Flussi />,
      text: 'Decreto de flujos ( non so cosa sia l’emersione)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'decreto-de-flujos-non-so-cosa-sia-l’emersione',
    },
    {
      icon: <Legale />,
      text: 'Asistencia jurídica',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'asistencia-jurídica',
    },
    {
      icon: <Psicologo />,
      text: 'Asistencia psicológica',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'asistencia-psicológica',
    },
    {
      icon: <Lingue />,
      text: 'Mediación lingüística',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'mediación-lingüística',
    },
    {
      icon: <Consulenze />,
      text: 'Asesoramiento',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'asesoramiento',
    },
  ],
  alb: [
    {
      icon: <Permesso />,
      text: 'Leshimi / rinduimlese qendrimi',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'leshimi-rinduimlese-qendrimi',
    },
    {
      icon: <Asilo />,
      text: 'Kerkes per azil',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'kerkes-per-azil',
    },
    {
      icon: <Sprar />,
      text: 'Kerko futje si per sol',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'kerko-futje-si-per-sol',
    },
    {
      icon: <Casa />,
      text: 'Huluntoni situaten e strehimit',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'huluntoni-situaten-e-strehimit',
    },
    {
      icon: <Cittadinanza />,
      text: 'Shtetesia italiane',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'shtetesia-italiane',
    },
    {
      icon: <Residenza />,
      text: 'Perditesimi i dokumentave tëndryshimit te vendbanimit',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'perditesimi-i-dokumentave-tëndryshimit-te-vendbanimit',
    },
    {
      icon: <Certificati />,
      text: 'Certifikatat e rezeruimit',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'certifikatat-e-rezeruimit',
    },
    {
      icon: <Corsi />,
      text: 'Regjistrimi ne kurse shkollore dhe provimt e gjuhes nga al nëb2',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'regjistrimi-ne-kurse-shkollore-dhe-provimt-e-gjuhes-nga-al-neb2',
    },
    {
      icon: <Formazione />,
      text: 'Regjistrimin e kursevete trajnimit ',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'regjistrimin-e-kursevete-trajnimit',
    },
    {
      icon: <Studi />,
      text: 'Perkthim dhe njohja e kualifikimeve ',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'perkthim-dhe-njohja-e-kualifikimeve',
    },
    {
      icon: <Famiglia />,
      text: 'Bashkim familijar',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'bashkim-familijar',
    },
    {
      icon: <Spid />,
      text: 'Spid: 1kart qe mundté perdoret per tegjitha gjérat',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid-1kart-qe-mundte-perdoret-per-tegjitha-gjerat',
    },
    {
      icon: <Isee />,
      text: 'ISEE: deklaron ne shtetsa te ardhurake',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee-deklaron-ne-shtetsa-te-ardhurake',
    },
    {
      icon: <Naspi />,
      text: 'NASPI: kur ke mbarua punén he contrat ben kereesen qe se pa pune',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi-kur-ke-mbarua-punen-he-contrat-ben-kereesen-qe-se-pa-pune',
    },
    {
      icon: <Bonus />,
      text: 'Bonus dhe subvencione',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'bonus-dhe-subvencione',
    },
    {
      icon: <Flussi />,
      text: 'Dekreti i dalses dhe rrsedhës',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'dekreti-i-dalses-dhe-rrsedhes',
    },
    {
      icon: <Legale />,
      text: 'Ndihme juridike',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'ndihme-juridike',
    },
    {
      icon: <Psicologo />,
      text: 'Ndihme psikologjike',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'ndihme-psikologjike',
    },
    {
      icon: <Lingue />,
      text: 'Ndermjetesimet gjuhesore',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'ndermjetesimet-gjuhesore',
    },
    {
      icon: <Consulenze />,
      text: 'Keshilla',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'keshilla',
    },
  ],
  ara: [
    {
      icon: <Permesso />,
      text: ' اصدار / تجديد تصريح الاقامة',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'اصدار-تجديد-تصريح-الاقامة',
    },
    {
      icon: <Asilo />,
      text: 'طلب اللجوء',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'طلب-اللجوء',
    },
    {
      icon: <Sprar />,
      text: 'طلبات الحماية لطالبي اللجوء واللاجئين ) SPRAR ) -  طلبات الاستقبال و التعايش (SAI )',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'طلبات-الحماية-لطالبي-اللجوء-واللاجئين-sprar-sai',
    },
    {
      icon: <Casa />,
      text: 'البحث عن حلول سكنية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'البحث-عن-حلول-سكنية',
    },
    {
      icon: <Cittadinanza />,
      text: 'طلب الجنسية الإيطالية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'طلب-الجنسية-الإيطالية',
    },
    {
      icon: <Residenza />,
      text: 'تحديث الوثائق وتغييرالإقامة',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'تحديث-الوثائق-وتغييرالإقامة',
    },
    {
      icon: <Certificati />,
      text: 'طلب السجل العدلي و نسخة السوابق من المحاكم الإيطالية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'طلب-السجل-العدلي-و-نسخة-السوابق-من-المحاكم-الإيطالية',
    },
    {
      icon: <Corsi />,
      text: ' التسجيل في الدراسية وامتحانات اللغة من A1 إلى B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'التسجيل-في-الدراسية-وامتحانات-اللغة-من-a1-ليبي-b2',
    },
    {
      icon: <Formazione />,
      text: 'التسجيل في الدورات التكوينية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'التسجيل-في-الدورات-التكوينية',
    },
    {
      icon: <Studi />,
      text: ' الترجمة والاعتراف بالشواهد',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'الترجمة-والاعتراف-بالشواهد',
    },
    {
      icon: <Famiglia />,
      text: 'التجمع العائلي',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'التجمع-العائلي',
    },
    {
      icon: <Spid />,
      text: 'النظام العام للهوية الرقمية  (SPID)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'النظام-العام-للهوية-الرقمية-spid',
    },
    {
      icon: <Isee />,
      text: 'مؤشر الوضع الاقتصادي المعادل (ISEE).',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'مؤشر-الوضع-الاقتصادي-المعادل-isee',
    },
    {
      icon: <Naspi />,
      text: ' تعويضات البطالة NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'تعويضات-البطالة-naspi',
    },
    {
      icon: <Bonus />,
      text: 'المكافآت والإعانات',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'المكافآت-والإعانات',
    },
    {
      icon: <Flussi />,
      text: ' مرسوم ولوج المهاجرين DECRETO FLUSSI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'مرسوم-ولوج-المهاجرين-decreto-flussi',
    },
    {
      icon: <Legale />,
      text: ' مساعدة قانونية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'مساعدة-قانونية',
    },
    {
      icon: <Psicologo />,
      text: ' المساعدة النفسية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'المساعدة-النفسية',
    },
    {
      icon: <Lingue />,
      text: ' الوساطة اللغوية',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'الوساطة-اللغوية',
    },
    {
      icon: <Consulenze />,
      text: ' استشارات',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'استشارات',
    },
  ],
  cin: [
    {
      icon: <Permesso />,
      text: '居留的更换和申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '居留的更换和申请',
    },
    {
      icon: <Asilo />,
      text: '难民申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '难民申请',
    },
    {
      icon: <Sprar />,
      text: 'SPRAR/SAI 申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'sprar/sai申请',
    },
    {
      icon: <Casa />,
      text: '帮助寻找住家',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '帮助寻找住家',
    },
    {
      icon: <Cittadinanza />,
      text: '意大利国籍',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '意大利国籍',
    },
    {
      icon: <Residenza />,
      text: '户籍文件更新',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '户籍文件更新',
    },
    {
      icon: <Certificati />,
      text: '证明预约（ 无罪证明等）',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '证明预约（ 无罪证明等）',
    },
    {
      icon: <Corsi />,
      text: '课程报名 和意大利语 A2 级和 B1 级',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '课程报名 和意大利语 A2 级和 B1 级',
    },
    {
      icon: <Formazione />,
      text: '专业培训课程报名',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '专业培训课程报名',
    },
    {
      icon: <Studi />,
      text: '翻译和 学历认证',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '翻译和 学历认证',
    },
    {
      icon: <Famiglia />,
      text: '家庭团聚',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '家庭团聚',
    },
    {
      icon: <Spid />,
      text: 'Spid 网络身份号',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'spid网络身份号',
    },
    {
      icon: <Isee />,
      text: 'ISEE 家庭经济状况指标',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'isee家庭经济状况指标',
    },
    {
      icon: <Naspi />,
      text: 'NASPI失业金',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'naspi失业金',
    },
    {
      icon: <Bonus />,
      text: '国家优惠和补贴',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '国家优惠和补贴',
    },
    {
      icon: <Flussi />,
      text: '劳工申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '劳工申请',
    },
    {
      icon: <Legale />,
      text: '法律协助',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '法律协助',
    },
    {
      icon: <Psicologo />,
      text: '精神障碍协助',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '精神障碍协助',
    },
    {
      icon: <Lingue />,
      text: '语言翻译',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '语言翻译',
    },
    {
      icon: <Consulenze />,
      text: '建议帮助',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: '建议帮助',
    },
  ],
}

export { services, lang }
