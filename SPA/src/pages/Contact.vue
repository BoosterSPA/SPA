<template>
  <div class="contact-page">
    <div class="container">
      <div class="form-section">
        <header class="hero">
          <h1>Contactez-nous</h1>
          <p>Nous sommes là pour répondre à vos questions et vous accompagner.</p>
        </header>
        
        <section class="contact-form">
          <h2>Envoyez-nous un message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nom</label>
              <input type="text" id="name" v-model="formData.name" required />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="formData.email" required />
            </div>
            
            <div class="form-group">
              <label for="subject">Sujet</label>
              <input type="text" id="subject" v-model="formData.subject" required />
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="formData.message" required></textarea>
            </div>
            
            <button type="submit" class="submit-button">Envoyer</button>
          </form>
        </section>
        
        <section class="contact-info">
          <h2>Informations de contact</h2>
          <p><strong>Email:</strong> contact@refugespa.fr</p>
          <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
          <p><strong>Adresse:</strong> 123 Rue du Refuge, 75000 Paris, France</p>
        </section>

        <!-- Section Google Maps -->
        <section class="map-section">
          <h2>Notre emplacement</h2>
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991950771216!2d2.294481315673668!3d48.85837007928769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fecebf6f391%3A0x8a080b79b4e3b1c6!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1625567585223!5m2!1sen!2sfr"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </section>
      </div>

      <div class="image-section">
        <img src="https://images.pexels.com/photos/1612846/pexels-photo-1612846.jpeg?cs=srgb&dl=pexels-goodcitizen-1612846.jpg&fm=jpg" alt="Background Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert('Merci pour votre message ! Nous vous répondrons sous peu.');
    }
  }
};
</script>

<style scoped>
.contact-page {
  background-color: #FFFFFF;
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem; /* Ajout de padding pour créer un espace autour */
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  border-radius: 8px;
  overflow: hidden;
  flex-grow: 1; /* Permet à la container de remplir l'espace disponible */
}

.image-section {
  flex: 1;
  display: flex;
}

.image-section img {
  width: 100%;
  height: auto; /* Assurez-vous que l'image conserve son aspect ratio */
  object-fit: cover;
}

.form-section {
  flex: 1.5;
  background-color: #F9F9F9;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%; /* S'assure que le formulaire prend toute la hauteur disponible */
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero h1 {
  color: #333;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
}

.hero p {
  color: #666;
  font-size: 1.125rem;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #CCC;
  border-radius: 5px;
  font-size: 0.875rem;
  background-color: #FFFFFF;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #FFBF78;
}

.form-group textarea {
  resize: none;
  height: 100px;
}

.submit-button {
  background-color: #FF7D29;
  color: #FFF;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
  display: block;
  width: 100%;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #FFBF78;
}

.contact-info {
  text-align: center;
  margin-top: 2rem;
}

.contact-info h2 {
  color: #333;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.contact-info p {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #666;
}

/* Section Google Maps */
.map-section {
  margin-top: 2rem;
  text-align: center;
}

.map-section h2 {
  color: #333;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.map-container {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .image-section {
    order: 2;
    min-width: 100%;
  }

  .image-section img {
    width: 100%;
    height: auto;
  }

  .form-section {
    order: 1;
    padding: 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .contact-form h2 {
    font-size: 1.25rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.75rem;
  }

  .submit-button {
    font-size: 0.75rem;
  }

  .map-container {
    padding-bottom: 75%; /* Adjust aspect ratio for smaller screens */
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 1.5rem;
  }

  .hero p {
    font-size: 0.875rem;
  }

  .contact-form h2 {
    font-size: 1rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.7rem;
  }

  .submit-button {
    font-size: 0.7rem;
  }
}
</style>