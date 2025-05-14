 // Script para ocultar el loader después de 2 segundos
 setTimeout(function() {
    document.getElementById('loader-container').style.display = 'none';
    document.body.classList.remove('hidden-content');
}, 2000);
 
 
 

 
 
 // Animación para los servicios

 const servicios = document.querySelectorAll('.tarjeta-servicio');
 const serviciosObserver = new IntersectionObserver((entries) => {
     entries.forEach((entry, index) => {
         if (entry.isIntersecting) {
             setTimeout(() => {
                 entry.target.classList.add('visible');
             }, index * 200);
         }
     });
 }, {
     threshold: 0.1
 });

 servicios.forEach(servicio => {
     serviciosObserver.observe(servicio);
 });



 

 // Efecto de partículas para servicios al hacer hover
 servicios.forEach((servicio, index) => {
     const particlesContainer = document.createElement('div');
     particlesContainer.className = 'service-particles';
     servicio.appendChild(particlesContainer);
     
     servicio.addEventListener('mouseenter', function() {
         // Limpiar partículas existentes
         particlesContainer.innerHTML = '';
         
         // Crear nuevas partículas
         for (let i = 0; i < 10; i++) {
             const particle = document.createElement('div');
             particle.className = 'service-particle';
             
             // Posición aleatoria
             const posX = Math.random() * 100;
             const posY = Math.random() * 100;
             
             // Tamaño aleatorio
             const size = Math.random() * 4 + 2;
             
             // Color del gradiente
             const colors = ['#f32170', '#ff6b08', '#cf23cf', '#eedd44'];
             const color = colors[Math.floor(Math.random() * colors.length)];
             
             // Establecer propiedades
             particle.style.left = `${posX}%`;
             particle.style.top = `${posY}%`;
             particle.style.width = `${size}px`;
             particle.style.height = `${size}px`;
             particle.style.backgroundColor = color;
             particle.style.opacity = '0';
             
             // Animación
             const duration = Math.random() * 1.5 + 0.5;
             const delay = Math.random() * 0.5;
             
             particle.style.transition = `all ${duration}s ease ${delay}s`;
             
             particlesContainer.appendChild(particle);
             
             // Activar animación
             setTimeout(() => {
                 particle.style.opacity = '0.8';
                 particle.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
             }, 10);
         }
     });
     
     servicio.addEventListener('mouseleave', function() {
         const particles = particlesContainer.querySelectorAll('.service-particle');
         particles.forEach(particle => {
             particle.style.opacity = '0';
         });
     });
 });





// Animación de partículas para los certificados

document.addEventListener('DOMContentLoaded', function() {
 // Animación al hacer scroll
 const certificados = document.querySelectorAll('.tarjeta-certificado');
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
             
             // Crear partículas solo cuando el elemento es visible
             createParticles(entry.target.querySelector('.particles'));
         }
     });
 }, {
     threshold: 0.1
 });

 certificados.forEach(certificado => {
     observer.observe(certificado);
 });






 // Función para crear partículas
 function createParticles(container) {
     if (!container || container.dataset.particlesCreated) return;
     
     container.dataset.particlesCreated = "true";
     
     const colors = ['#f32170', '#ff6b08', '#cf23cf', '#eedd44'];
     const particleCount = 20;
     
     for (let i = 0; i < particleCount; i++) {
         const particle = document.createElement('div');
         particle.classList.add('particle');
         
         // Posición aleatoria
         const posX = Math.random() * 100;
         const posY = Math.random() * 100;
         
         // Tamaño aleatorio
         const size = Math.random() * 3 + 1;
         
         // Color aleatorio
         const color = colors[Math.floor(Math.random() * colors.length)];
         
         // Establecer propiedades
         particle.style.left = `${posX}%`;
         particle.style.top = `${posY}%`;
         particle.style.width = `${size}px`;
         particle.style.height = `${size}px`;
         particle.style.background = color;
         
         // Animación
         const duration = Math.random() * 3 + 2;
         const delay = Math.random() * 2;
         
         particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
         
         container.appendChild(particle);
     }
 }



 // Efecto hover para las tarjetas de certificados
 certificados.forEach(card => {
     card.addEventListener('mouseenter', function() {
         const particles = this.querySelectorAll('.particle');
         particles.forEach(particle => {
             particle.style.animationDuration = '1s';
         });
     });
     
     card.addEventListener('mouseleave', function() {
         const particles = this.querySelectorAll('.particle');
         particles.forEach(particle => {
             particle.style.animationDuration = '1s';
         });
     });
 });
});