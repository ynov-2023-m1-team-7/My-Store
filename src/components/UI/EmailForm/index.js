const {useState} = require('react');
const sendEmailForm = require('@/services/api/email.api'); 

const EmailForm = ({ productId, closeModal }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendEmailForm(productId, formData); 

      closeModal();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="prenom">Prénom :</label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default EmailForm;
