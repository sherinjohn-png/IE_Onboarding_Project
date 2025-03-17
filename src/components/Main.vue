<template>
    <div class="main-container">
      <!-- Header -->
      <header class="main-header">
        <div class="header-container">
          <div class="logo-section">
            <span class="logo-icon">☀️</span>
            <h1>Sun Protection Australia</h1>
          </div>
          <nav class="main-navigation">
            <ul>
              <li class="active"><a href="#">About</a></li>
              <li><router-link to="/home">Tools</router-link></li>
            </ul>
          </nav>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="main-hero">
        <div class="hero-content">
          <h1>Promoting Sun Protection Across Diverse Communities</h1>
          <p>Understanding UV exposure and protecting your skin from harmful rays</p>
          <router-link to="/home" class="cta-button">Explore Our Sun Protection Tools</router-link>
        </div>
      </section>
  
      <!-- Project Overview Section -->
      <section class="overview-section">
        <div class="section-container">
          <h2>Project Overview</h2>
          <p>Australia, a nation known for its outdoor lifestyle and a diverse population, faces the challenge of developing sun safety guidelines that effectively balance the risks of skin cancer with the crucial need for vitamin D, particularly for young adults with darker skin tones.</p>
          <p>Prolonged sun exposure to harmful ultraviolet (UV) radiation is a leading cause of skin cancer, including melanoma, which is on the rise in Australia. Our goal is to encourage young Australian adults to engage and maintain sun-safe behaviours, given the significant risk of skin cancer and the importance of vitamin D intake.</p>
        </div>
      </section>
  
      <!-- Image Gallery Section -->
      <section class="gallery-section">
        <div class="section-container">
          <h2>Sun Protection Essentials</h2>
          <div class="image-gallery">
            <div class="gallery-item">
              <img src="/images/MainPage/mainpage1.jpg" alt="Beach scene with surfers" class="gallery-image">
              <p>Australian beaches see high UV exposure throughout the year</p>
            </div>
            <div class="gallery-item">
              <img src="/images/MainPage/mainpage2.jpg" alt="Person with sunscreen" class="gallery-image">
              <p>Proper sunscreen application is essential for protection</p>
            </div>
          </div>
          <div class="image-gallery">
            <div class="gallery-item">
              <img src="/images/MainPage/mainpage3.jpg" alt="Sun protection items" class="gallery-image">
              <p>Multiple forms of sun protection are recommended</p>
            </div>
            <div class="gallery-item">
              <img src="/images/MainPage/mainpage4.png" alt="Sunscreen SPF varieties" class="gallery-image">
              <p>Choose the right SPF based on your skin type and UV index</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Target Audience Section -->
      <section class="audience-section">
        <div class="section-container">
          <h2>Who This Is For</h2>
          <p>This website is designed for young Australians within Victoria, Australia who have many outdoor activities and are exposed to the sun for long periods in their daily lives.</p>
          <p>Our tools help users understand UV levels, set sunscreen reminders, and make informed decisions about sun protection based on current conditions.</p>
          <div class="cta-container">
            <router-link to="/home" class="cta-button">Access Sun Protection Tools</router-link>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="features-section">
        <div class="section-container">
          <h2>What We Offer</h2>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🔆</div>
              <h3>Real-time UV Index</h3>
              <p>Check current UV levels in your location to make informed decisions about sun exposure</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⏰</div>
              <h3>Sunscreen Reminders</h3>
              <p>Set personalized reminders to reapply sunscreen throughout the day</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Data Visualisations</h3>
              <p>Understand the impact of skin cancer and rising temperatures in Australia</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🔬</div>
                <h3>Sunburn & Cancer Risk</h3>
                <p>Learn about how sunburns significantly increase your lifetime risk of developing skin cancer</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="main-footer">
        <div class="footer-container">
          <div class="footer-section">
            <h3>Sun Protection Australia</h3>
            <p>Helping Australians stay safe under the sun with real-time UV monitoring and reminders.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><router-link to="/">About</router-link></li>
              <li><router-link to="/home">UV Tools</router-link></li>
              <li><a href="#">Skin Cancer impact</a></li>
              <li><a href="#">Sunscreen Reminder</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <p>Email: MonashTA08@IE.com</p>
            <p>Phone: +61 1 2345 6789</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage'
  }
  </script>
  
  <style scoped>
  /* Global styles */
  .main-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  /* Header styles */
  .main-header {
    background-color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .header-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  
  .logo-section {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    font-size: 42px;
    margin-right: 15px;
    color: #ff9800;
  }
  
  .logo-section h1 {
    font-size: 32px;
    font-weight: 700;
    color: #4a90e2;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
  }
  
  .main-navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .main-navigation li {
    margin: 0 15px;
  }
  
  .main-navigation a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 8px 0;
    position: relative;
    transition: color 0.3s;
  }
  
  .main-navigation a:hover {
    color: #4a90e2;
  }
  
  .main-navigation li.active a {
    color: #4a90e2;
  }
  
  .main-navigation li.active a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #4a90e2;
    bottom: 0;
    left: 0;
  }
  
  /* Hero section */
  .main-hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/MainPage/mainpage1.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 150px 20px;
  }
  
  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-content h1 {
    font-size: 48px;
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .hero-content p {
    font-size: 20px;
    margin-bottom: 30px;
  }
  
  .cta-button {
    display: inline-block;
    background-color: #ff9800;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .cta-button:hover {
    background-color: #f57c00;
    transform: translateY(-2px);
  }
  
  /* Section styles */
  .section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .overview-section, .gallery-section, .audience-section, .features-section {
    padding: 80px 0;
  }
  
  .overview-section {
    background-color: #f5f9fc;
  }
  
  .gallery-section {
    background-color: white;
  }
  
  .audience-section {
    background-color: #f5f9fc;
    text-align: center;
  }
  
  .features-section {
    background-color: white;
  }
  
  .section-container h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 40px;
    color: #333;
  }
  
  .section-container p {
    font-size: 18px;
    margin-bottom: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Gallery styles */
  .image-gallery {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .gallery-item {
    flex: 1;
    max-width: 500px;
    text-align: center;
  }
  
  .gallery-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .gallery-image:hover {
    transform: scale(1.02);
  }
  
  .gallery-item p {
    margin-top: 15px;
    font-size: 16px;
    color: #555;
  }
  
  /* Features grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
  
  .feature-card {
    background-color: #f5f9fc;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .feature-icon {
    font-size: 36px;
    margin-bottom: 15px;
  }
  
  .feature-card h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #4a90e2;
  }
  
  .feature-card p {
    margin: 0;
    font-size: 16px;
  }
  
  .cta-container {
    margin-top: 50px;
  }
  
  /* Footer styles */
  .main-footer {
    background-color: #333;
    color: #fff;
    padding: 60px 0 20px;
  }
  
  .footer-container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .footer-section {
    width: 30%;
    margin-bottom: 30px;
  }
  
  .footer-section h3 {
    font-size: 20px;
    margin-bottom: 20px;
    color: #4a90e2;
  }
  
  .footer-section p {
    margin-bottom: 10px;
    color: #ddd;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 10px;
  }
  
  .footer-section ul li a {
    color: #ddd;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section ul li a:hover {
    color: #4a90e2;
  }
  
  .copyright {
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    border-top: 1px solid #444;
  }
  
  .copyright p {
    color: #aaa;
    font-size: 14px;
  }
  
  /* Responsive styles */
  @media (max-width: 1200px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
    }
    
    .hero-content h1 {
      font-size: 40px;
    }
  }
  
  @media (max-width: 992px) {
    .image-gallery {
      flex-direction: column;
      align-items: center;
    }
    
    .gallery-item {
      max-width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr;
    }
    
    .header-container {
      flex-direction: column;
      height: auto;
      padding: 15px;
    }
    
    .logo-section {
      margin-bottom: 15px;
    }
    
    .main-hero {
      padding: 100px 20px;
    }
    
    .hero-content h1 {
      font-size: 32px;
    }
    
    .hero-content p {
      font-size: 16px;
    }
    
    .section-container h2 {
      font-size: 30px;
    }
    
    .section-container p {
      font-size: 16px;
    }
    
    .footer-section {
      width: 100%;
    }
  }
  </style>