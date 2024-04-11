const searchForm = document.getElementById('searchForm')

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const inputSearch = document.getElementById('searchInput')
    const myValue = inputSearch.value
    console.log(myValue);
    try {
        const response = await fetch('http://localhost:5000/api/files/getFile', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filename: myValue
            })
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            window.location = "../src/pdf_annotations.html"
        }
        else {
            console.log("Response Not Ok.", data)
        }
    } catch (error) {
        console.log("Error: ", error)
    }
})