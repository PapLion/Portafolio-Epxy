//Hacer los temas
const themeSwitch = document.querySelector('.theme-switch');

// Escuchar el evento de clic en el interruptor de tema
themeSwitch.addEventListener('click', toggleTheme);

// Función para cambiar entre los temas
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Cambiar al tema opuesto
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Actualizar el atributo de tema en el elemento HTML
    document.documentElement.setAttribute('data-theme', newTheme);

    // Cambiar el ícono de la luna y el sol
    const moonIcon = document.querySelector('.fa-moon');
    const sunIcon = document.querySelector('.fa-sun');

    if (newTheme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    } else {
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    }
}
