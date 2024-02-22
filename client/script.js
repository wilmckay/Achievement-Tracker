document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form')
    const loginScreen = document.getElementById('login-screen')
    const gameListScreen = document.getElementById('game-list-screen')
    const gameList = document.getElementById('game-list')
    const games = [
        "The Legend of Zelda: Breath of the Wild",
        "Red Dead Redemption 2",
        "The Witcher 3: Wild Hunt",
        "Overwatch 2",
        "Stardew Valley",
        "Elden Ring"
    ]

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        
        const isLoggedIn = true

        if (isLoggedIn) {
            loginScreen.style.display = 'none'
            gameListScreen.style.display = 'block'

            axios.get('localhost:3001/games')
                .then(response => {
                    const games = response.data
                    const gameListContainer = document.getElementById('game-list')
                    gameListContainer.innerHTML = ''
    
                    games.forEach(game => {
                        const gameItem = document.createElement('div')
                        gameItem.textContent = game.title
                        gameListContainer.appendChild(gameItem)
                    })
                })
                .catch(error => console.error('Error fetching game list:', error))
        
            fetchGameList()
        }
    })

    function fetchGameList() {
        axios.get('localhost:3001/games')
            .then(response => {
                const games = response.data
                const gameListContainer = document.getElementById('game-list')
                gameListContainer.innerHTML = ''
                games.forEach(game => {
                    const gameItem = document.createElement('div')
                    gameItem.textContent = game.title
                    gameListContainer.appendChild(gameItem)
                })
            })
            .catch(error => console.error('Error fetching game list:', error))
    }

    function createGameButtons() {
        const gameListContainer = document.getElementById('game-list');
        games.forEach(game => {
            const button = document.createElement('button');
            button.textContent = game;
            button.classList.add('game-button');
            button.addEventListener('click', function() {
            });
            gameListContainer.appendChild(button);
    })
}

document.addEventListener('DOMContentLoaded', createGameButtons)
})
