document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const gameListScreen = document.getElementById('game-list-screen');
    const gameListContainer = document.getElementById('game-list');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const isLoggedIn = true

        if (isLoggedIn) {
            loginScreen.style.display = 'none';
            gameListScreen.style.display = 'block';

            axios.get('http://localhost:3001/games')
                .then(response => {
                    const games = response.data;
                    gameListContainer.innerHTML = '';

                    games.forEach(game => {
                        const gameButton = document.createElement('button');
                        gameButton.textContent = game.title;
                        gameButton.classList.add('game-button');
                        gameButton.addEventListener('click', function() {
                            navigateToAchievements(game.title);
                        });
                        gameListContainer.appendChild(gameButton);
                    });
                })
                .catch(error => console.error('Error fetching game list:', error));
        }
    });
});

function navigateToAchievements(gameTitle) {
    window.location.href = 'achievements.html?game=' + encodeURIComponent(gameTitle);
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameTitle = urlParams.get('game');

    document.getElementById('game-title').textContent = gameTitle;

    const achievements = [
        'Complete Level 1',
        'Defeat the Boss',
        'Collect 100 Coins',
        'Discover Hidden Area',
        'Earn Gold Medal',
        'Unlock Secret Character',
        'Achieve High Score',
        'Complete Side Quest'
    ];

    showAchievements(gameTitle);
});

function showAchievements(gameTitle) {
    document.getElementById('game-title-text').textContent = gameTitle;
    document.getElementById('achievements').style.display = 'block';

    const achievements = [
        'Complete Level 1',
        'Defeat the Boss',
        'Collect 100 Coins',
        'Discover Hidden Area',
        'Earn Gold Medal',
        'Unlock Secret Character',
        'Achieve High Score',
        'Complete Side Quest'
    ];

    const achievementList = document.getElementById('achievement-list');
    achievementList.innerHTML = '';

    achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.textContent = achievement;
        listItem.classList.add('achievement-item');
        listItem.addEventListener('click', function() {
            listItem.classList.toggle('crossed-out');
        });
        achievementList.appendChild(listItem);
    });
}