console.log("Client side JS working")

const userEmail = document.getElementById('email')
const userUsername = document.getElementById('username')
const userPassword = document.getElementById('password')
const userPhone = document.getElementById('phone')
const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const myUser = {
        username: userUsername.value,
        email: userEmail.value,
        phone: userPhone.value,
        password: userPassword.value
    }
    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myUser)
        })
        const data = await response.json()
        if (response.ok) {
            alert(data.msg)
            localStorage.setItem('token', data.token)
            window.location = "/client/home.html"
        }
        else {
            data.extraDetails ? alert(data.extraDetails) : alert(data.message)
            console.log(data)
        }
    } catch (error) {
        console.log(error)
    }

})