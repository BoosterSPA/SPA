<script setup>
</script>

<template>
  <div class="page-container">

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="contact-info">
          <h3>Contact</h3>
          <ul>
            <li><a href="tel:+0324151702">03.24.15.17.02</a></li>
            <li><a href="https://www.google.com/maps?q=123+Rue+du+Refuge,+75000+Paris,+France" target="_blank">123 Rue
                du Refuge, 75000 Paris, France</a></li>
            <li><a href="mailto:contact@refugespa.fr">contact@refugespa.fr</a></li>
          </ul>
        </div>
        <div class="social-media">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <!-- SVG pour Facebook -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#039be5" d="M13 1v4h-2V5c0-1.1.9-2 2-2h2V0h-2c-2.2 0-4 1.8-4 4v2H7v4h2v12h4V9h3.6l.4-4H13z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <!-- SVG pour Twitter -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="#1DA1F2"
                d="M23.644 4.956c-.846.375-1.759.628-2.724.742a4.728 4.728 0 0 0 2.073-2.604 9.425 9.425 0 0 1-3.042 1.162A4.724 4.724 0 0 0 16.616 3a4.727 4.727 0 0 0-4.724 4.724c0 .37.042.732.122 1.079-3.927-.197-7.41-2.078-9.73-4.944a4.725 4.725 0 0 0-.639 2.373c0 1.64.832 3.085 2.095 3.933a4.705 4.705 0 0 1-2.138-.59v.06c0 2.29 1.626 4.191 3.779 4.618-.396.107-.812.164-1.243.164-.304 0-.601-.029-.892-.084.601 1.877 2.345 3.248 4.407 3.281a9.452 9.452 0 0 1-5.868 2.016c-.38 0-.757-.022-1.13-.065a13.318 13.318 0 0 0 7.196 2.106c8.638 0 13.356-7.16 13.356-13.356 0-.204-.005-.408-.013-.611a9.593 9.593 0 0 0 2.38-2.447z" />
            </svg>
          </a>
          <!-- Ajoutez d'autres icônes sociales si nécessaire -->
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Style global pour la mise en page */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* S'assure que la page occupe toute la hauteur de la fenêtre */
}

.content {
  flex: 1;
  /* Prend tout l'espace restant avant le footer */
}

.footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  margin-top: auto;
  /* Place le footer en bas */
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-info {
  flex: 1;
}

.contact-info h3 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin: 5px 0;
}

.contact-info a {
  color: #333;
  text-decoration: none;
  font-size: 1em;
}

.contact-info a:hover {
  text-decoration: underline;
}

.social-media {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.social-media a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #eee;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.social-media a:hover {
  background-color: #ddd;
}

.social-media svg {
  width: 24px;
  height: 24px;
  fill: #333;
}
</style>
