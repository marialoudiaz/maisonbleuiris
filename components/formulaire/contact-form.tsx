import React, { useState, useRef, useEffect } from 'react';
import '../../styles/App.scss';
import '../../app/globals.css';

interface contactFormProps {
  infos: {
    form: string[],
  };
  langz: string;
  pack: string;
}

const ContactForm: React.FC<contactFormProps> = ({ infos, langz, pack }) => {

  const isEnglish = langz;
  const yesmessage = [
    'Thank you for your message !',
    "I'll come back to you really soon",
    'Reçu 5/5 !',
    'Je reviens vers vous très prochainement'
  ];
  const nomessage = [
    "Oh no.., it looks like it didn't work",
    'Please, try again soon :)',
    "Oops.. Ça n'a pas fonctionné",
    'Merci de réessayer dans un moment :)'
  ];
  //STATES///
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [emailData, setEmailData] = useState({
    prenom: '',
    email: '',
    company: '',
    industry: '',
    message: '',
    services: selectedServices,
  });
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const form = useRef();

  // SEND EMAIL// -----------------------------
  const sendEmail = async (e: any) => {
    if (e?.preventDefault) e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });
      if (!response.ok) throw new Error("Erreur d'envoi");
      setMessage(
        isEnglish === 'EN'
          ? `${yesmessage[0]} ${yesmessage[1]}`
          : `${yesmessage[2]} ${yesmessage[3]}`
      );
    } catch (err) {
      console.error("Échec:", err);
      setMessage(
        isEnglish === 'EN'
          ? `${nomessage[0]} ${nomessage[1]}`
          : `${nomessage[2]} ${nomessage[3]}`
      );
    }
  };
  // -----------------------------
  // TEXT INPUT HANDLER
  // -----------------------------
  const handleInputChange = (e: any) => {
    setEmailData({ ...emailData, [e.target.id]: e.target.value });
  };

  // TOGGLE BUTTONS FOR SERVICES//
  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };
  // QUESTION HANDLING//
  const handleChange = (e: any) => {
    const valueC = e;
    setQuestion(valueC);
    setAcceptTerms(false);
    handleSubmitQuestion(valueC);
  };
  const handleSubmitQuestion = (props: any) => {
    if (typeof props === 'string' && props !== '' && acceptTerms) {
      window.location.href = 'https://www.bible.com/fr/bible/63/MAT.13.24-48.BFC';
    } else {
      sendEmail(props);
    }
  };
  // UPDATE emailData.services//
  useEffect(() => {
    setEmailData({ ...emailData, services: selectedServices });
  }, [selectedServices]);

  //  INTERNAL TOGGLE BUTTON COMPONENT//
  const ToggleBtn = ({
    label,
    value
  }: {
    label: string;
    value: string;
  }) => (
    <button
      type="button"
      onClick={() => toggleService(value)}
      className={`toggle-btn ${selectedServices.includes(value) ? 'active' : ''}`}
    >
     {label}
    </button>
  );
  // ajouter pack au premier render/click sur le bouton
  useEffect(() => {
  if (pack) {
    setEmailData((prev) => ({
      ...prev,
      message: pack + " " + prev.message  // pré-remplir une seule fois
    }));
  }
}, [pack]);


  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-grp'>
          <div className='flex-wrap'>
            <label htmlFor="prenom">{infos.form[3]}</label>
            <input
              placeholder= {`${isEnglish ? 'Name and Surname' : 'Nom & Prénom'}`}
              type='text'
              id="prenom"
              name='user_name'
              value={emailData.prenom}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='flex-wrap'>
            <label htmlFor="email">{infos.form[4]}</label>
            <input
              placeholder={`${isEnglish ? 'Your Email' : 'Votre mail'}`}
              type='email'
              id="email"
              name='user_email'
              value={emailData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className='form-grp'>
          <div className='flex-wrap'> 
            <label htmlFor="company">{infos.form[5]}</label>
            <input
              id="company"
              name='company'
              placeholder={`${isEnglish ? 'Your Company Name' : 'Le nom de votre entreprise/marque'}`}
              value={emailData.company}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='flex-wrap'>
            <label htmlFor="industry">{infos.form[6]}</label>
            <input
              placeholder={`${isEnglish ? 'Your Industry type' : 'Votre industrie'}`}
              id="industry"
              name='industry'
              value={emailData.industry}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* SERVICES BUTTONS */}
        <div className='checkbox-group flex-wrap'>
          <label>{infos.form[7]}</label>
          <div style={{ display: 'flex', gap: '1em', flexWrap: 'wrap', justifyContent:'center', fontSize:'14px' }}>
            <ToggleBtn label="Logo" value="logo" />
            <ToggleBtn label={infos.form[8]} value="site internet" />
            <ToggleBtn label={infos.form[9]} value="identité visuelle" />
            <ToggleBtn label={infos.form[10]} value="autre" />
          </div>
        </div>

				{/* TEXT AREA */}
        <div className='flex-wrap' style={{ gap: '2.5rem' }}>
          <label htmlFor="message">{infos.form[11]}</label>
          <textarea
            placeholder={`${isEnglish ? 'Hello, you are the best, I would love to work with you on ....' : "Bonjour, vous êtes vraiment les meilleurs, j'adorerais travailler avec vous sur..."}`}
            id="message"
            name='message'
            value={emailData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='c'>
          <label htmlFor="question">Do you like chocolate ?</label>
          <input
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>

        {/* SUBMIT */}
        <div className='flexForm'>
          <button
            className='btn-transp-dark'
            onClick={sendEmail}
            role="button"
            tabIndex={0}
          >
            <div>
              <svg
                className="icon-transp"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
                aria-label='Arrow Icon'
              >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-white"
              ></path>
              </svg>
              {infos.form[13]}
            </div>
          </button>

          <p>{message}</p>
        </div>

      </form>
    </>
  );
};

export default ContactForm;
