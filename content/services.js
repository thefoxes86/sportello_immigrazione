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
      slug: 'cittadinanza-italiana',
      text: 'Cittadinanza italiana',
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
      text: 'Aggiornamento documenti e cambio residenza',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 7,
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Prenotazione certificati (carichi pendenti...)',
      data: {
        documenti: {},
        numberToCall: true,
      },
    },
    {
      id: 8,
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Iscrizione corsi scolastici ed esami di lingua da A1 a B2',
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
        documenti: {
          necessari: [
            { title: 'PERMESSO / CARTA DI SOGGIORNO', url: '#' },
            { title: 'PASSAPORTO', url: '#' },
            { title: 'PASSAPORTO DEL FAMILIARE', url: '#' },
            { title: 'COPIA NULLA OSTA', url: '#' },
          ],
          alloggio: [
            { title: 'CERTIFICATO IDONEITÀ ALLOGGIATIVA2', url: '#' },
            {
              title:
                'CONTRATTO PROPRIETÀ oppure CONTRATO LOCAZIONE oppure COMODATO D’USO GRATUITO oppure SUCCESSIONE oppure VISURA CATASTALE (se il richiedente è ospite) ',
              url: '#',
            },
            {
              title:
                'MODELLO S2: OSPITALITÀ PER I PARENTI compilato e firmato dall’intestatario del contratto di locazione (da tutti gli intestatari se più di uno) e garanzia compilato e firmato da persona che garantisce il sostenimento economico.',
              url: '#',
            },
            {
              title: 'DOCUMENTO IDENTITÀ DEI FIRMATARI MODELLO S1 E S2',
              url: '#',
            },
          ],
          lavoro: {
            dipendenti: [
              { title: 'ULTIMA DICHIARAZIONE REDDITI', url: '#' },
              { title: 'UNILAV OPPURE INSTAURAZIONE', url: '#' },
              { title: 'CONTRATTO LAVORO', url: '#' },
              { title: 'ULTIMA BUSTA PAGA', url: '#' },
              { title: 'DOCUMENTO IDENTITÀ DATORE DI LAVORE', url: '#' },
              { title: 'MODELLO S34 ', url: '#' },
            ],
            domestici: [
              { title: 'COMUNICAZIONE ASSUNZIONE INPS', url: '#' },
              { title: 'MODELLO S3', url: '#' },
              {
                title:
                  'DICHIARAZIONE DEL DATORE DI LAVORO SUL REDDITO RELATIVO ALL’ANNO PRECEDENTE',
                url: '#',
              },
              {
                title:
                  'BOLLETTINO DI VERSAMENTO DEI CONTRIBUTI inps TRIMESTRE PRECEDENTE',
                url: '#',
              },
              { title: 'DOCUMENTO IDENTITÀ DEL DATORE DI LAVORO', url: '#' },
            ],
            individuale: [
              {
                title:
                  'CERTIFICATO CAMERA DI COMMERCIO oppure VISURA CAMERALE DELLA SOCIETÀ',
                url: '#',
              },
              { title: 'ATTRIBUZIONE PARTITA IVA', url: '#' },
              { title: 'LICENZA COMUNALE (dove prevista)', url: '#' },
              { title: 'MODELLO UNICO', url: '#' },
              {
                title:
                  'RICEVUTA DI PRESENTAZIONE OPPURE RELAZIONE DI BILANCIO DEL COMMERCIALISTA oppure BILANCIO',
                url: '#',
              },
            ],
            societa: [
              {
                title:
                  'CERTIFICATO CAMERA DI COMMERCIO oppure VISURA CAMERALE DELLA SOCIETÀ',
                url: '#',
              },
              { title: 'ATTRIBUZIONE PARTITA IVA DELLA SOCIETÀ', url: '#' },
              { title: 'MODELLO UNICO ', url: '#' },
              {
                title:
                  'RICEVUTA DI PRESENTAZIONE oppure RELAZIONE DI BILANCIO DEL COMMERCIALISTA oppure BILANCIO',
                url: '#',
              },
            ],
            progetto: [
              {
                title: 'CONTRATTO DI LAVORO (con durata prestazione) ',
                url: '#',
              },
              {
                title:
                  'DICHIARAZIONE DEL DATORE DI LAVORO  DI CUI RISULTI ATTUALITÀ DEL LAVORO',
                url: '#',
              },
              { title: 'DICHIARAZIONE GESTIONE SEPARATA ALL’INPS', url: '#' },
              { title: 'MODELLO UNICO', url: '#' },
            ],
            socio: [
              { title: 'VISURA CAMERALE DELLA COPERATIVA', url: '#' },
              { title: 'ATTRIBUZIONE PARTITA IVA COOP', url: '#' },
              {
                title: 'DICHIARAZIONE DEL PRESIDENTE DELLA COOPERATIVA',
                url: '#',
              },
              { title: 'FOTOCOPIA DEL LIBRO SOCI', url: '#' },
              { title: 'MODELLO UNICO O CUD', url: '#' },
              { title: 'LIBERI PROFESSIONISTI ', url: '#' },
              { title: 'ISCRIZIONE ALL’ALBO ', url: '#' },
              {
                title: 'DICHIARAZIONE DEL DATORE DI RELATIVO SUL REDDITO ANNO',
                url: '#',
              },
            ],
          },
        },
        adviceFull: {
          text: 'RICONGIUMENTO DI ULTRA 65 ANNI:  consegnare dichiarazione che attesti la volontà a stipulare l’assicurazione sanitaria. Entro 8 giorni dall’entrata in Italia dovrà essere presentata un’assicurazione sanitaria (stipulata in Italia e senza scadenza) che garantisca la copertura per tutti i rischi sul territorio nazionale. ',
        },
        adviceEmpty: {
          text: 'Al momento della consegna del KIT l’interessato/a dovrà presentarsi allo sportello postale MUNITO DI MARCA DA BOLLO DA 16,00€ e sarà richiesto il pagamento di un bollettino postale di importo variabile a seconda della tipologia di richiesta effettuata.',
        },
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
      text: 'Emersione e decreto flussi',
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
    },
    {
      id: 2,
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Aylum request',
    },
    {
      id: 3,
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Request for accomodation SPRAR-SAI',
    },
    {
      id: 4,
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Search for a housing solution',
    },
    {
      id: 5,
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Italian citizenship',
    },
    {
      id: 6,
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Document update and change of residence',
    },
    {
      id: 7,
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Reservation certificates (“carichi pendenti”..)',
    },
    {
      id: 8,
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Enrolement in school courses and language exams (A1 A B2)',
    },
    {
      id: 9,
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Enrolement in training courses',
    },
    {
      id: 10,
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Help for translation and recognition of school qualifications',
    },
    {
      id: 11,
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'Family reunification',
    },
    {
      id: 12,
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
    },
    {
      id: 13,
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
    },
    {
      id: 14,
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
    },
    {
      id: 15,
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus and benefits',
    },
    {
      id: 16,
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      id: 17,
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Legal assistance',
    },
    {
      id: 18,
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Psychological assistance',
    },
    {
      id: 19,
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Language mediation',
    },
    {
      id: 20,
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Consulting',
    },
  ],
  fra: [
    {
      id: 1,
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'DÉLIVRANCE / RENOUVELLEMENT DU TITRE DE SÉJOUR',
    },
    {
      id: 2,
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'DEMANDE DE STATUT DE RÉFUGIÉ',
    },
    {
      id: 3,
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: "DEMANDE D'INSERTION SPRAR / SAI",
    },
    {
      id: 4,
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'RECHERCHE SOLUTION LOGEMENT',
    },
    {
      id: 5,
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'NATIONALITÉ ITALIENNE',
    },
    {
      id: 6,
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'MISE À JOUR DES DOCUMENTS ET CHANGEMENT DE RÉSIDENCE',
    },
    {
      id: 7,
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'CERTIFICAT DE RÉSERVATION CASIER JUDICIAIRE',
    },
    {
      id: 8,
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'INSCRIPTION AUX COURS SCOLAIRES ET AUX EXAMENS DE LANGUES DU A1 AU B2',
    },
    {
      id: 9,
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'INSCRIPTION AUX COURS DE FORMATION',
    },
    {
      id: 10,
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'TRADUCTION ET RECONNAISSANCE DES TITRES',
    },
    {
      id: 11,
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'REGROUPEMENT FAMILIAL',
    },
    {
      id: 12,
      icon: <Spid />,
      slug: 'spid',
      text: 'SYSTÈME PUBLIC D’IDENTITÉ NUMÉRQUE (SPID)',
    },
    {
      id: 13,
      icon: <Isee />,
      slug: 'isee',

      text: 'INDICATEUR DE SITUATION ÉCONOMIQUE ÉQUIVALENTE ( ISEE )',
    },
    {
      id: 14,
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NOUVELLE ASSURANCE SOCIALE POUR L’EMPLOI ( NASPI )',
    },
    {
      id: 15,
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'BONUS ET SUBVENTIONS',
    },
    {
      id: 16,
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'ÉMERSION ET DÉCRET FLUX',
    },
    {
      id: 17,
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'ASSISTANCE LÉGALE',
    },
    {
      id: 18,
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'ASSISTANCE PSYCHOLOGIQUE',
    },
    {
      id: 19,
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'MÉDIATIONS LINGUISTIQUES',
    },
    {
      id: 20,
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'CONSEIL',
    },
  ],

  rus: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'подготовка документов для получения или продления вида на жительство',
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'помощь в подаче прошения о политическом убежище',
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'помощь в подаче прошения о включении в программу SPRAR-SAI',
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'поиск жилья',
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'подача документов для итальянского гражданства',
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'обновление документов и смена регистрации места жительства',
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'подготовка справки по незавершённым платежам',
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'направление на Курси ( общеобразовательные и языковые), екзамены по итальянскому языку от А1 до В2',
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Организация курсов профессиональной подготовки',
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'признание академической квалификации',
    },
    {
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'перевод и легализация документов необходимых для воссоединения семьи',
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'помощь в получении бонусов и субсидий',
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'юридическая помощь',
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'помощь психолога',
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: ' Услуги медиатора ( переводчика)',
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'консультации',
    },
  ],
  bra: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Emissão / renovação de permissão de residência',
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Pedido de asilo',
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Pedido de inclusão no projeto sprar / sai',
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Procurar uma solução de alojamento',
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Cidadania italiana',
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Atualização de documentos e mudança de residência',
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Reserva certidão (eventuais processos criminais em curso..)',
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Matrícula escolar e teste de idioma de A1 a B2',
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Matrícula em curso de formação',
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Tradução e reconhecimento de qualificações',
    },
    {
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'Reunificação familiar',
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'Spid: (identidade digital)',
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI: (subsídio de desemprego)',
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bônus e subvenções',
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Assistência judiciária',
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Aconselhamento',
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Mediação linguística',
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Consultoria',
    },
  ],
  spa: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Solicitud y renovación del permiso de residencia',
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Petición de asilo',
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Solicitud de inserciÓN SPRAR/SAI',
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Búsqueda de vivienda',
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Ciudadanía italiana',
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Actualización de documentos y cambio de residencia',
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Reservar  el certificado de cargos pendientes',
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Inscripción en cursos escolares y exámenes de idiomas a1 a B2',
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Inscripción en cursos de formación',
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Traducción y reconocimiento de títulos',
    },
    {
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'Reunificación familiar',
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'SPID',
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE',
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI',
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus y subvencione',
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Asistencia jurídica',
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Asistencia psicológica',
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Mediación lingüística',
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Asesoramiento',
    },
  ],
  alb: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'Leshimi / rinduimlese qendrimi',
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'Kerkes per azil',
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'Kerko futje si per sol',
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'Huluntoni situaten e strehimit',
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'Shtetesia italiane',
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'Perditesimi i dokumentave tëndryshimit te vendbanimit',
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'Certifikatat e rezeruimit',
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: 'Regjistrimi ne kurse shkollore dhe provimt e gjuhes nga al nëb2',
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'Regjistrimin e kursevete trajnimit ',
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: 'Perkthim dhe njohja e kualifikimeve ',
    },
    {
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'Bashkim familijar',
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'Spid: 1kart qe mundté perdoret per tegjitha gjérat',
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE: deklaron ne shtetsa te ardhurake',
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI: kur ke mbarua punén he contrat ben kereesen qe se pa pune',
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'Bonus dhe subvencione',
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: 'Ndihme juridike',
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: 'Ndihme psikologjike',
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: 'Ndermjetesimet gjuhesore',
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: 'Keshilla',
    },
  ],
  ara: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: 'صدار / تجديد تصريح الاقامة',
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: 'طلب اللجوء',
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'طلبات الحماية لطالبي اللجوء واللاجئين ) SPRAR ) -  طلبات الاستقبال و التعايش (SAI )',
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: 'البحث عن حلول سكنية',
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: 'طلب الجنسية الإيطالية',
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: 'تحديث الوثائق وتغييرالإقامة',
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: 'طلب السجل العدلي و نسخة السوابق من المحاكم الإيطالية',
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: ' التسجيل في الدراسية وامتحانات اللغة من A1 إلى B2',
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: 'التسجيل في الدورات التكوينية',
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: ' الترجمة والاعتراف بالشواهد',
    },
    {
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: 'اعادة توحيد العائلة',
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'النظام العام للهوية الرقمية  (SPID)',
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'مؤشر الوضع الاقتصادي المعادل (ISEE).',
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: ' تعويضات البطالة NASPI',
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: 'المكافآت والإعانات',
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: ' مساعدة قانونية',
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: ' المساعدة النفسية',
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: ' الوساطة اللغوية',
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: ' استشارات',
    },
  ],
  cin: [
    {
      icon: <Permesso />,
      slug: 'rilascio-e-rinnovo-permesso-di-soggiorno',
      text: '居留的更换和申请',
    },
    {
      icon: <Asilo />,
      slug: 'richiesta-asilo',
      text: '难民申请',
    },
    {
      icon: <Sprar />,
      slug: 'richiesta-inserimento-sprar-sai',
      text: 'SPRAR/SAI 申请',
    },
    {
      icon: <Casa />,
      slug: 'ricerca-soluzione-abitativa',
      text: '帮助寻找住家',
    },
    {
      icon: <Cittadinanza />,
      slug: 'citadinanza-italiana',
      text: '意大利国籍',
    },
    {
      icon: <Residenza />,
      slug: 'aggiornamento-documenti-e-cambio-residenza',
      text: '户籍文件更新',
    },
    {
      icon: <Certificati />,
      slug: 'prenotazione-certificati-carichi-pendenti',
      text: '证明预约（ 无罪证明等）',
    },
    {
      icon: <Corsi />,
      slug: 'iscrizione-corsi-scolastici-ed-esami-di-lingua-da-a1-a-b2',
      text: '课程报名 和意大利语 A2 级和 B1 级',
    },
    {
      icon: <Formazione />,
      slug: 'iscrizione-corsi-di-formazione-professionale',
      text: '专业培训课程报名',
    },
    {
      icon: <Studi />,
      slug: 'traduzione-e-assistenza-nel-riconoscimento-dei-titoli-di-studio',
      text: '翻译和 学历认证',
    },
    {
      icon: <Famiglia />,
      slug: 'ricongiungimento-e-coesione-familiare',
      text: '家庭团聚',
    },
    {
      icon: <Spid />,
      slug: 'spid',
      text: 'Spid 网络身份号',
    },
    {
      icon: <Isee />,
      slug: 'isee',

      text: 'ISEE 家庭经济状况指标',
    },
    {
      icon: <Naspi />,
      slug: 'naspi',
      text: 'NASPI失业金',
    },
    {
      icon: <Bonus />,
      slug: 'bonus-e-sussidi',
      text: '国家优惠和补贴',
    },
    {
      icon: <Flussi />,
      slug: 'emersione-e-decreto-flussi',
      text: 'Emersione e decreto flussi',
    },
    {
      icon: <Legale />,
      slug: 'assistenza-legale',
      text: '法律协助',
    },
    {
      icon: <Psicologo />,
      slug: 'assistenza-psicologica',
      text: '精神障碍协助',
    },
    {
      icon: <Lingue />,
      slug: 'mediazioni-lingue',
      text: '语言翻译',
    },
    {
      icon: <Consulenze />,
      slug: 'consulenze',
      text: '建议帮助',
    },
  ],
}

export { services, lang }
