document.addEventListener("DOMContentLoaded", function() {
        const submenuTrigger = document.querySelector('.has-submenu > a'); // Seleciona o link do menu "Projetos"
        const submenu = document.querySelector('.has-submenu .submenu'); // Seleciona o submenu

        // Mostra/oculta o submenu ao clicar
        submenuTrigger.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o redirecionamento ao clicar no link
            submenu.classList.toggle('show'); // Alterna a visibilidade do submenu
        });

        // Fecha o submenu ao clicar fora
        document.addEventListener('click', function(event) {
            if (!submenu.contains(event.target) && !submenuTrigger.contains(event.target)) {
                submenu.classList.remove('show'); // Fecha o submenu se clicar fora
            }
        });
    });

