async function filterFiles() {
    const fileType = document.getElementById("fileType").value;
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const files = document.querySelectorAll(".file");

    console.log(fileType)

    try {
        const response = await fetch('http://localhost:5000/api/files/getFiles/filter', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filter: fileType
            })
        })
        const data = await response.json()
        if (response.ok) {
            console.log(data)
            // const tableBody = document.getElementById('user_table_body');
            // tableBody.innerHTML = '';
            // files.forEach(file => {
            //     const row = document.createElement('tr');
            //     row.innerHTML = `
            //     <td>${file.filename}</td>
            //     <td>${file.contentType}</td>
            //     <td>${file.data}</td>
            //     `;
            //     tableBody.appendChild(row);
            //     window.location.href = 'http://127.0.0.1:5501/client/src/uploaded.html'
            // });
            const filesJson = JSON.stringify(data);
            const encodedFilesJson = encodeURIComponent(filesJson);
            window.location.href = `./uploaded.html?files=${encodedFilesJson}`;
        }
        else {
            console.log("Response Not Ok")
        }
    } catch (error) {

    }

    // files.forEach(file => {
    //     const fileName = file.innerText.toLowerCase();
    //     const fileTypeClass = fileType === "all" || file.classList.contains(fileType);
    //     const searchTermMatch = fileName.includes(searchTerm);

    //     if (fileTypeClass && searchTermMatch) {
    //         file.style.display = "block";
    //     } else {
    //         file.style.display = "none";
    //     }
    // });
}