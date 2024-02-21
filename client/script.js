document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form')
    const loginScreen = document.getElementById('login-screen')
    const gameListScreen = this.document.getElementById('game-list-screen')

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault()
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        
        const isLoggedIn = true

        if (isLoggedIn) {
            loginScreen.style.display = 'none'
            gameListScreen.style.display = 'block'
        }
    })
})