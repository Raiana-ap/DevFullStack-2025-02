let swiper;

document.addEventListener("DOMContentLoaded", function () {
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
    const gameInput = document.getElementById('gameInput');
    const searchIcon = document.getElementById('searchIcon');

    gameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchGame();
        }
    });

    searchIcon.addEventListener('click', function () {
        searchGame();
    });

    function searchGame() {
        const searchGame = gameInput.value.trim().toUpperCase();

        switch (searchGame) {
            case 'MARIO':
                swiper.slideToLoop(0); // loop é melhor aqui
                break;
            case 'POKEMON':
                swiper.slideToLoop(1);
                break;
            case 'ZELDA':
                swiper.slideToLoop(2);
                break;
            default:
                alert('Jogo não encontrado.');
                break;
        }

        gameInput.value = '';
    }
});
