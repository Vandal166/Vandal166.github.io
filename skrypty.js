document.addEventListener('DOMContentLoaded', function ()
{
    const navOdnosniki = document.querySelectorAll('nav a');
    const menuPrzelacznik = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');

    // ukrywanie menu na początku
    nav.style.display = 'none';

    menuPrzelacznik.addEventListener('click', toggleMenu);

    navOdnosniki.forEach(link => {link.addEventListener('click', plynnePrzejscie);});

    // funkcja do przelaczania menu
    function toggleMenu() 
    {
        menuPrzelacznik.classList.toggle('menu-open');

        if (nav.style.display === 'flex' || nav.style.display === '') 
        {
            // zamykanie menu
            nav.style.top = '-100%';
            setTimeout(() => {nav.style.display = 'none';}, 500); // czas trwania animacji
        }
        else
        {
            // otwieranie menu
            nav.style.display = 'flex';
            setTimeout(() => {nav.style.top = '0';}, 50);// opoznienie przed animacja
        }
    }

    function plynnePrzejscie(e) 
    {
        e.preventDefault(); //zapobiega domnyslny 'przeskok' do odnosnika

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({top: targetElement.offsetTop - 60, behavior: 'smooth'});

        // zamykanie menu po kliknieciu w odnosnik
        toggleMenu();
    }
});