document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form')
    const loginScreen = document.getElementById('login-screen')
    const gameListScreen = document.getElementById('game-list-screen')
    const gameList = document.getElementById('game-list')

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        
        const isLoggedIn = true

        if (isLoggedIn) {
            loginScreen.style.display = 'none'
            gameListScreen.style.display = 'block'

            fetch('games')
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
        axios.get('games')
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
})
