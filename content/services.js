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
        documenti: {
          necessari: [
            { title: 'PASSAPORTO', url: '#' },
            { title: 'DOCUMENTO D’IDENTITÀ', url: '#' },
            { title: 'PERMESSO DI SOGGIORNO', url: '#' },
            { title: 'TESSERA SANITARIA', url: '#' },
            {
              title: 'CERTIFICATO CARICHI PENDENTI (validità 6 mesi)',
              url: '#',
            },
            { title: 'CERTIFICATO DI RESIDENZA', url: '#' },
            { title: 'IDONEITÀ ALLOGGIATIVA', url: '#' },
            { title: 'ATTESTATO CONOSCENZA LINGUA ITALIANA A2*', url: '#' },
            { title: 'CONTRATTO DI LAVORO', url: '#' },
            { title: 'UNILAV', url: '#' },
            { title: 'BUSTE PAGA', url: '#' },
            { title: 'CUD / 730 ANNO PRECEDENTE (se presente)', url: '#' },
            { title: 'BUSTE PAGA', url: '#' },
          ],
          domestico: [
            {
              title:
                'DICHIARAZIONE REDDITO ANNO PRECEDETE REDATTA DAL DATORE DI LAVORO ',
              url: '#',
            },
            {
              title:
                'FOTOCOPIA DELLA CARTA DI IDENTITÀ E CODICE FISCALE DEL DATORE DI LAVORO',
              url: '#',
            },
            { title: 'BOLLETTINI INPS', url: '#' },
          ],
          dipendente: [
            { title: 'FOTOCOPIA LIBRO SOCI ', url: '#' },
            { title: 'FOTOCOPIA ATTRIBUZIONE PARTITE IVA', url: '#' },
            {
              title:
                'FOTOCOPIA ISCRIZIONE ALLA CAMERA DI COMMERCIO O VISURA CAMERALE ',
              url: '#',
            },
          ],
        },
        adviceEmpty: {
          text: 'Al momento della consegna del KIT l’interessato/a dovrà presentarsi allo sportello postale MUNITO DI MARCA DA BOLLO DA 16,00 e sarà richiesto il pagamento di un bollettino postale da € 130,46',
        },
        adviceFull: {
          text: 'NB: IL PERMESSO RILASCIATO NON HA SCADENZA MA DEVE ESSERE AGGIORNATO OGNI 5 ANNI ',
        },
        numberToCall: false,
      },
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
    },
    {
      id: 2,
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Richiesta Asilo',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 3,
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Richiesta inserimento SPRAR-SAI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 4,
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Ricerca soluzione abitativa',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 5,
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Citadinanza italiana',
      data: {
        documenti: {
          necessari: [
            {
              title:
                'DOCUMENTO di RICONOSCIMENTO (PERMESSO DI SOGGIORNO, PASSAPORTO, CARTA di IDENTITÀ)',
              url: '#',
            },
            { title: 'CODICE FISCALE', url: '#' },
            {
              title: 'REQUISITO DELLA CONOSCENZA DELLA LINGUA ITALIANA B1',
              url: '#',
            },
            { title: 'DATA D’INGRESSO IN ITALIA', url: '#' },
            {
              title:
                'STORICO RESIDENZE IN ITALIA ED EVENTUALI ALTRE RESIDENZE ALL’ESTERO (ULTIMA RESIDENZA NOTA AL PAESE D’ORIGINE)',
              url: '#',
            },
            {
              title:
                'CERTIFICATO di NASCITA legalizzato/apostillato munito di traduzione in lingua italiana legalizzata/apostillata. N.B.: la certificazione di nascita non deve essere prodotta se la nascita è avvenuta ed è stata registrata in Italia. ',
              url: '#',
            },
            {
              title:
                'CERTIFICATO PENALE del Paese di origine (e degli eventuali Paesi terzi di residenza) legalizzato/apostillato e munito di traduzione in lingua italiana legalizzata/apostillata. Il certificato penale ha validità 6 mesi dalla data del rilascio. NB: NON DEVE ESSERE PRODOTTO DA CHI HA FATTO INGRESSO IN ITALIA PRIMA DEI 14 ANNI E NON HA MAI LASCIATO IL PAESE.',
              url: '#',
            },
            {
              title:
                'REDDITI DEI 3 ANNI PRECEDENTI ALLA PRESENTAZIONE DELLA DOMANDA.',
              url: '#',
            },
            {
              title:
                'RICEVUTA del versamento del contributo obbligatorio di euro 250,00 sul CCP (conto corrente postale) n. 809020 intestato a: MINISTERO INTERNO D.L.C.I. - CITTADINANZA con causale: “Cittadinanza - contributo di cui all’art.1, comma 12, legge 15 luglio 2009, n. 94”. ',
              url: '#',
            },
            {
              title:
                'MARCA da BOLLO da euro 16,00 (i cui estremi - identificativo e data di pagamento - vanno inseriti nel modulo di domanda: sezione “Imposta di bollo”) ',
              url: '#',
            },
          ],
        },
        adviceFull: {
          text: 'NB: LA PRESENTAZIONE DELLA DOMANDA AVVIENE SOLO PER VIA TELEMATICA ACCEDENDO AL PORTALE MINISTERIALE CON LE CREDENZIALI SPID   https://portaleservizi.dlci.interno.it/ AliCittadinanza/ali/home.htm ',
        },
        numberToCall: false,
      },
    },
    {
      id: 6,
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'AGGIORNAMENTO DOCUMENTI E CAMBIO RESIDENZA',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 7,
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'PRENOTAZIONE CERTIFICATI (CARICHI PENDENTI..)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 8,
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'ISCRIZIONE CORSI SCOLASTICI ED ESAMI DI LINGUA DA A1 A B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 9,
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Iscrizione corsi di formazione professionale',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 10,
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Traduzione e assistenza nel riconoscimento dei titoli di studio',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 11,
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'Ricongiungimento e coesione familiare',
      data: {
        documenti: {},
        numberToCall: false,
      },
    },
    {
      id: 12,
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 13,
      icon: <Isee />,
      slug: 'isee',
      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 14,
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 15,
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus e sussidi',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 16,
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'EMERSIONE E DECRETO FLUSSI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 17,
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Assistenza legale',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 18,
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Assistenza psicologica',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 19,
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Mediazioni linguistiche',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 20,
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Consulenze',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  eng: [
    {
      id: 1,
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Relase and renewal of residency permit',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'relase-and-renewal-of-residency-permit',
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
    },
    {
      id: 2,
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Aylum request',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'richiesta-asilo',
      // slug: 'aylum-request',
    },
    {
      id: 3,
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Request for accomodation SPRAR-SAI',
      data: {
        documenti: {},
        numberToCall: true,
      },
      slug: 'richiesta-inserimento-sprar-sai',
      // slug: 'request-for-accomodation-sprar-sai',
    },
    {
      id: 4,
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Search for a housing solution',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'search-for-a-housing-solution',
      slug: 'ricerca-soluzione-abitativa',
    },
    {
      id: 5,
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Italian citizenship',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'italian-citizenship',
      slug: 'citadinanza-italiana',
    },
    {
      id: 6,
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Document update and change of residence',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'document-update-and-change-of-residence',
      slug: 'aggiornamento-documenti-e-cambio-residenza',
    },
    {
      id: 7,
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Reservation certificates (“carichi pendenti”..)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'reservation-certificates-carichi-pendenti',
      slug: 'prenotazione-certificati-carichi-pendenti',
    },
    {
      id: 8,
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Enrolement in school courses and language exams (A1 A B2)',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'enrolement-in-school-courses-and-language-exams-a1-a-b2',
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
    },
    {
      id: 9,
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Enrolement in training courses',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'enrolement-in-training-courses',
      slug: 'iscrizione-corsi-di-formazione-professionale',
    },
    {
      id: 10,
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Help for translation and recognition of school qualifications',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'help-for-translation-and-recognition-of-school-qualifications',
    },
    {
      id: 11,
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'Family reunification',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'family-reunification',
    },
    {
      id: 12,
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 13,
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 14,
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 15,
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus and benefits',
      data: {
        documenti: {},
        numberToCall: true,
      },
      // slug: 'bonus-and-benefits',
    },
    {
      id: 16,
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersion and flows decree',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 17,
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Legal assistance',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 18,
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Psychological assistance',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 19,
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Language mediation',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 20,
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Consulting',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  rus: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'подготовка документов для получения или продления вида на жительство',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'помощь в подаче прошения о политическом убежище',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'помощь в подаче прошения о включении в программу SPRAR-SAI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'поиск жилья',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'подача документов для итальянского гражданства',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'обновление документов и смена регистрации места жительства',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'подготовка справки по незавершённым платежам',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'направление на Курси ( общеобразовательные и языковые), екзамены по итальянскому языку от А1 до В2',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Организация курсов профессиональной подготовки',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: '',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      text: 'перевод и легализация документов необходимых для воссоединения семьи',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'помощь в получении бонусов и субсидий',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'помощь в отслеживании выхода декретов Flussi ( рабочая иммиграция)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'юридическая помощь',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'помощь психолога',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: ' Услуги медиатора ( переводчика)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'консультации',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  bra: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Emissão / renovação de permissão de residência',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Pedido de asilo',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Pedido de inclusão no projeto sprar / sai',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Procurar uma solução de alojamento',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Cidadania italiana',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Atualização de documentos e mudança de residência',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Reserva certidão (eventuais processos criminais em curso..)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Matrícula escolar e teste de idioma de A1 a B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Matrícula em curso de formação',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Tradução e reconhecimento de qualificações',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      text: 'Reunificação familiar',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'Spid: (identidade digital)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI: (subsídio de desemprego)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bônus e subvenções',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersão e decreto de fluxos',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Assistência judiciária',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Aconselhamento',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Mediação linguística',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Consultoria',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  spa: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Solicitud y renovación del permiso de residencia',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Petición de asilo',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: '',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Búsqueda de vivienda',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Ciudadanía italiana',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Actualización de documentos y cambio de residencia',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Reservar  el certificado de cargos pendientes',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Inscripción en cursos escolares y exámenes de idiomas a1 a B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Inscripción en cursos de formación',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Traducción y reconocimiento de títulos',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      text: 'Reunificación familiar',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus y subvencione',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Decreto de flujos ( non so cosa sia l’emersione)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Asistencia jurídica',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Asistencia psicológica',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Mediación lingüística',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Asesoramiento',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  alb: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Leshimi / rinduimlese qendrimi',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Kerkes per azil',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Kerko futje si per sol',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Huluntoni situaten e strehimit',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Shtetesia italiane',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Perditesimi i dokumentave tëndryshimit te vendbanimit',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Certifikatat e rezeruimit',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Regjistrimi ne kurse shkollore dhe provimt e gjuhes nga al nëb2',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Regjistrimin e kursevete trajnimit ',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Perkthim dhe njohja e kualifikimeve ',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      text: 'Bashkim familijar',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'Spid: 1kart qe mundté perdoret per tegjitha gjérat',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE: deklaron ne shtetsa te ardhurake',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI: kur ke mbarua punén he contrat ben kereesen qe se pa pune',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus dhe subvencione',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Dekreti i dalses dhe rrsedhës',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Ndihme juridike',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Ndihme psikologjike',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Ndermjetesimet gjuhesore',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Keshilla',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  ara: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: ' اصدار / تجديد تصريح الاقامة',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'طلب اللجوء',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'طلبات الحماية لطالبي اللجوء واللاجئين ) SPRAR ) -  طلبات الاستقبال و التعايش (SAI )',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'البحث عن حلول سكنية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'طلب الجنسية الإيطالية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'تحديث الوثائق وتغييرالإقامة',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'طلب السجل العدلي و نسخة السوابق من المحاكم الإيطالية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: ' التسجيل في الدراسية وامتحانات اللغة من A1 إلى B2',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'التسجيل في الدورات التكوينية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: ' الترجمة والاعتراف بالشواهد',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      text: 'التجمع العائلي',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'النظام العام للهوية الرقمية  (SPID)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'مؤشر الوضع الاقتصادي المعادل (ISEE).',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: ' تعويضات البطالة NASPI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'المكافآت والإعانات',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: ' مرسوم ولوج المهاجرين DECRETO FLUSSI',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: ' مساعدة قانونية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: ' المساعدة النفسية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: ' الوساطة اللغوية',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: ' استشارات',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
  cin: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: '居留的更换和申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: '难民申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'SPRAR/SAI 申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: '帮助寻找住家',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: '意大利国籍',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: '户籍文件更新',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: '证明预约（ 无罪证明等）',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: '课程报名 和意大利语 A2 级和 B1 级',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: '专业培训课程报名',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: '翻译和 学历认证',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      text: '家庭团聚',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'Spid 网络身份号',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE 家庭经济状况指标',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI失业金',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: '国家优惠和补贴',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: '劳工申请',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: '法律协助',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: '精神障碍协助',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: '语言翻译',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: '建议帮助',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
  ],
}

export { services, lang }
