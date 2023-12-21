export const sendEmailAPI = async (formData) => {
    try {
      const response = await fetch('/api/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      throw new Error('Erreur lors de l\'envoi du formulaire : ' + error.message);
    }
  };
  