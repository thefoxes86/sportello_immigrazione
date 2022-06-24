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

const services = {
  ita: [
    { icon: <Permesso />, text: 'Rilascio e rinnovo permesso di soggiorno' },
    { icon: <Asilo />, text: 'Richiesta Asilo' },
    { icon: <Sprar />, text: 'Richiesta inserimento SPRAR/SAI' },
    { icon: <Casa />, text: 'Ricerca soluzione abitativa' },
    { icon: <Cittadinanza />, text: 'Citadinanza italiana' },
    { icon: <Residenza />, text: 'AGGIORNAMENTO DOCUMENTI E CAMBIO RESIDENZA' },
    {
      icon: <Certificati />,
      text: 'PRENOTAZIONE CERTIFICATI (CARICHI PENDENTI..)',
    },
    {
      icon: <Corsi />,
      text: 'ISCRIZIONE CORSI SCOLASTICI ED ESAMI DI LINGUA DA A1 A B2',
    },
    {
      icon: <Formazione />,
      text: 'Iscrizione corsi di formazione professionale',
    },
    {
      icon: <Studi />,
      text: 'Traduzione e assistenza nel riconoscimento dei titoli di studio',
    },
    { icon: <Famiglia />, text: 'Ricongiungimento e coesione familiare' },
    { icon: <Spid />, text: 'SPID' },
    { icon: <Isee />, text: 'ISEE' },
    { icon: <Naspi />, text: 'NASPI' },
    { icon: <Bonus />, text: 'Bonus e sussidi' },
    { icon: <Flussi />, text: 'EMERSIONE E DECRETO FLUSSI' },
    { icon: <Legale />, text: 'Assistenza legale' },
    { icon: <Psicologo />, text: 'Assistenza psicologica' },
    { icon: <Lingue />, text: 'Mediazioni linguistiche' },
    { icon: <Consulenze />, text: 'Consulenze' },
  ],
  eng: [
    { icon: <Permesso />, text: 'Relase and renewal of residency permit' },
    { icon: <Asilo />, text: 'Aylum request' },
    { icon: <Sprar />, text: 'Request for accomodation SPRAR/SAI' },
    { icon: <Casa />, text: 'Search for a housing solution' },
    { icon: <Cittadinanza />, text: 'Italian citizenship' },
    { icon: <Residenza />, text: 'Document update and change of residence' },
    {
      icon: <Certificati />,
      text: 'Reservation certificates (“carichi pendenti”..)',
    },
    {
      icon: <Corsi />,
      text: 'Enrolement in school courses and language exams (A1 A B2)',
    },
    {
      icon: <Formazione />,
      text: 'Enrolement in training courses',
    },
    {
      icon: <Studi />,
      text: 'Help for translation and recognition of school qualifications',
    },
    { icon: <Famiglia />, text: 'Family reunification' },
    { icon: <Spid />, text: 'SPID' },
    { icon: <Isee />, text: 'ISEE' },
    { icon: <Naspi />, text: 'NASPI' },
    { icon: <Bonus />, text: 'Bonus and benefits' },
    { icon: <Flussi />, text: 'Emersion and flows decree' },
    { icon: <Legale />, text: 'Legal assistance' },
    { icon: <Psicologo />, text: 'Psychological assistance' },
    { icon: <Lingue />, text: 'Language mediation' },
    { icon: <Consulenze />, text: 'Consulting' },
  ],
  rus: [
    { icon: <Permesso />, text: 'Rilascio e rinnovo permesso di soggiorno' },
    { icon: <Asilo />, text: 'Richiesta Asilo' },
    { icon: <Sprar />, text: 'Richiesta inserimento SPRAR/SAI' },
    { icon: <Casa />, text: 'Ricerca soluzione abitativa' },
    { icon: <Cittadinanza />, text: 'Citadinanza italiana' },
    { icon: <Residenza />, text: 'AGGIORNAMENTO DOCUMENTI E CAMBIO RESIDENZA' },
    {
      icon: <Certificati />,
      text: 'PRENOTAZIONE CERTIFICATI (CARICHI PENDENTI..)',
    },
    {
      icon: <Corsi />,
      text: 'ISCRIZIONE CORSI SCOLASTICI ED ESAMI DI LINGUA DA A1 A B2',
    },
    {
      icon: <Formazione />,
      text: 'Iscrizione corsi di formazione professionale',
    },
    {
      icon: <Studi />,
      text: 'Traduzione e assistenza nel riconoscimento dei titoli di studio',
    },
    { icon: <Famiglia />, text: 'Ricongiungimento e coesione familiare' },
    { icon: <Spid />, text: 'SPID' },
    { icon: <Isee />, text: 'ISEE' },
    { icon: <Naspi />, text: 'NASPI' },
    { icon: <Bonus />, text: 'Bonus e sussidi' },
    { icon: <Flussi />, text: 'EMERSIONE E DECRETO FLUSSI' },
    { icon: <Legale />, text: 'Assistenza legale' },
    { icon: <Psicologo />, text: 'Assistenza psicologica' },
    { icon: <Lingue />, text: 'Mediazioni linguistiche' },
    { icon: <Consulenze />, text: 'Consulenze' },
  ],
  bra: [
    {
      icon: <Permesso />,
      text: 'Emissão / renovação de permissão de residência',
    },
    { icon: <Asilo />, text: 'Pedido de asilo' },
    { icon: <Sprar />, text: 'Pedido de inclusão no projeto sprar / sai' },
    { icon: <Casa />, text: 'Procurar uma solução de alojamento' },
    { icon: <Cittadinanza />, text: 'Cidadania italiana' },
    {
      icon: <Residenza />,
      text: 'Atualização de documentos e mudança de residência',
    },
    {
      icon: <Certificati />,
      text: 'Reserva certidão (eventuais processos criminais em curso..)',
    },
    {
      icon: <Corsi />,
      text: 'Matrícula escolar e teste de idioma de A1 a B2',
    },
    {
      icon: <Formazione />,
      text: 'Matrícula em curso de formação',
    },
    {
      icon: <Studi />,
      text: 'Tradução e reconhecimento de qualificações',
    },
    { icon: <Famiglia />, text: 'Reunificação familiar' },
    { icon: <Spid />, text: 'Spid: (identidade digital)' },
    { icon: <Isee />, text: 'ISEE' },
    { icon: <Naspi />, text: 'NASPI: (subsídio de desemprego)' },
    { icon: <Bonus />, text: 'Bônus e subvenções' },
    { icon: <Flussi />, text: 'Emersão e decreto de fluxos' },
    { icon: <Legale />, text: 'Assistência judiciária' },
    { icon: <Psicologo />, text: 'Aconselhamento' },
    { icon: <Lingue />, text: 'Mediação linguística' },
    { icon: <Consulenze />, text: 'Consultoria' },
  ],
  spa: [
    {
      icon: <Permesso />,
      text: 'Solicitud y renovación del permiso de residencia',
    },
    { icon: <Asilo />, text: 'Petición de asilo' },
    { icon: <Sprar />, text: '' },
    { icon: <Casa />, text: 'Búsqueda de vivienda' },
    { icon: <Cittadinanza />, text: 'Ciudadanía italiana' },
    {
      icon: <Residenza />,
      text: 'Actualización de documentos y cambio de residencia',
    },
    {
      icon: <Certificati />,
      text: 'Reservar  el certificado de cargos pendientes',
    },
    {
      icon: <Corsi />,
      text: 'Inscripción en cursos escolares y exámenes de idiomas a1 a B2',
    },
    {
      icon: <Formazione />,
      text: 'Inscripción en cursos de formación',
    },
    {
      icon: <Studi />,
      text: 'Traducción y reconocimiento de títulos',
    },
    { icon: <Famiglia />, text: 'Reunificación familiar' },
    { icon: <Spid />, text: 'SPID' },
    { icon: <Isee />, text: 'ISEE' },
    { icon: <Naspi />, text: 'NASPI' },
    { icon: <Bonus />, text: 'Bonus y subvencione' },
    {
      icon: <Flussi />,
      text: 'Decreto de flujos ( non so cosa sia l’emersione)',
    },
    { icon: <Legale />, text: 'Asistencia jurídica' },
    { icon: <Psicologo />, text: 'Asistencia psicológica' },
    { icon: <Lingue />, text: 'Mediación lingüística' },
    { icon: <Consulenze />, text: 'Asesoramiento' },
  ],
  alb: [
    { icon: <Permesso />, text: 'Leshimi / rinduimlese qendrimi' },
    { icon: <Asilo />, text: 'Kerkes per azil' },
    { icon: <Sprar />, text: 'Kerko futje si per sol' },
    { icon: <Casa />, text: 'Huluntoni situaten e strehimit' },
    { icon: <Cittadinanza />, text: 'Shtetesia italiane' },
    {
      icon: <Residenza />,
      text: 'Perditesimi i dokumentave tëndryshimit te vendbanimit',
    },
    {
      icon: <Certificati />,
      text: 'Certifikatat e rezeruimit',
    },
    {
      icon: <Corsi />,
      text: 'Regjistrimi ne kurse shkollore dhe provimt e gjuhes nga al nëb2',
    },
    {
      icon: <Formazione />,
      text: 'Regjistrimin e kursevete trajnimit ',
    },
    {
      icon: <Studi />,
      text: 'Perkthim dhe njohja e kualifikimeve ',
    },
    { icon: <Famiglia />, text: 'Bashkim familijar' },
    {
      icon: <Spid />,
      text: 'Spid: 1kart qe mundté perdoret per tegjitha gjérat',
    },
    { icon: <Isee />, text: 'ISEE: deklaron ne shtetsa te ardhurake' },
    {
      icon: <Naspi />,
      text: 'NASPI: kur ke mbarua punén he contrat ben kereesen qe se pa pune',
    },
    { icon: <Bonus />, text: 'Bonus dhe subvencione' },
    { icon: <Flussi />, text: 'Dekreti i dalses dhe rrsedhës' },
    { icon: <Legale />, text: 'Ndihme juridike' },
    { icon: <Psicologo />, text: 'Ndihme psikologjike' },
    { icon: <Lingue />, text: 'Ndermjetesimet gjuhesore' },
    { icon: <Consulenze />, text: 'Keshilla' },
  ],
  ara: [
    { icon: <Permesso />, text: ' اصدار / تجديد تصريح الاقامة' },
    { icon: <Asilo />, text: 'طلب اللجوء' },
    {
      icon: <Sprar />,
      text: 'طلبات الحماية لطالبي اللجوء واللاجئين ) SPRAR ) /  طلبات الاستقبال و التعايش (SAI )',
    },
    { icon: <Casa />, text: 'البحث عن حلول سكنية' },
    { icon: <Cittadinanza />, text: 'طلب الجنسية الإيطالية' },
    { icon: <Residenza />, text: 'تحديث الوثائق وتغييرالإقامة' },
    {
      icon: <Certificati />,
      text: 'طلب السجل العدلي و نسخة السوابق من المحاكم الإيطالية',
    },
    {
      icon: <Corsi />,
      text: ' التسجيل في الدراسية وامتحانات اللغة من A1 إلى B2',
    },
    {
      icon: <Formazione />,
      text: 'التسجيل في الدورات التكوينية',
    },
    {
      icon: <Studi />,
      text: ' الترجمة والاعتراف بالشواهد',
    },
    { icon: <Famiglia />, text: 'التجمع العائلي' },
    { icon: <Spid />, text: 'النظام العام للهوية الرقمية  (SPID)' },
    { icon: <Isee />, text: 'مؤشر الوضع الاقتصادي المعادل (ISEE).' },
    { icon: <Naspi />, text: ' تعويضات البطالة NASPI' },
    { icon: <Bonus />, text: 'المكافآت والإعانات' },
    { icon: <Flussi />, text: ' مرسوم ولوج المهاجرين DECRETO FLUSSI' },
    { icon: <Legale />, text: ' مساعدة قانونية' },
    { icon: <Psicologo />, text: ' المساعدة النفسية' },
    { icon: <Lingue />, text: ' الوساطة اللغوية' },
    { icon: <Consulenze />, text: ' استشارات' },
  ],
  cin: [
    { icon: <Permesso />, text: '居留的更换和申请' },
    { icon: <Asilo />, text: '难民申请' },
    { icon: <Sprar />, text: 'SPRAR/SAI 申请' },
    { icon: <Casa />, text: '帮助寻找住家' },
    { icon: <Cittadinanza />, text: '意大利国籍' },
    {
      icon: <Residenza />,
      text: '户籍文件更新',
    },
    {
      icon: <Certificati />,
      text: '证明预约（ 无罪证明等）',
    },
    {
      icon: <Corsi />,
      text: '课程报名 和意大利语 A2 级和 B1 级',
    },
    {
      icon: <Formazione />,
      text: '专业培训课程报名',
    },
    {
      icon: <Studi />,
      text: '翻译和 学历认证',
    },
    { icon: <Famiglia />, text: '家庭团聚' },
    {
      icon: <Spid />,
      text: 'Spid 网络身份号',
    },
    { icon: <Isee />, text: 'ISEE 家庭经济状况指标' },
    {
      icon: <Naspi />,
      text: 'NASPI失业金',
    },
    { icon: <Bonus />, text: '国家优惠和补贴' },
    { icon: <Flussi />, text: '劳工申请' },
    { icon: <Legale />, text: '法律协助' },
    { icon: <Psicologo />, text: '精神障碍协助' },
    { icon: <Lingue />, text: '语言翻译' },
    { icon: <Consulenze />, text: '建议帮助' },
  ],
}

export { services }
