console.log("Client side JS working")

const userEmail = document.getElementById('email')
const userPassword = document.getElementById('password')
const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const myUser = {
        email: userEmail.value,
        password: userPassword.value
    }
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myUser)
        })
        if (response.ok) {
            const data = await response.json()
            alert(data.message)
            localStorage.setItem('token', data.token)
            window.location = "/client/src/home.html"
        }
        else {
            alert("Invalid Credentials")
        }
    } catch (error) {
        console.log(error)
    }

})