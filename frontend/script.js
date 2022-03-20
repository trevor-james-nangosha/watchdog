const url = 'http://127.0.0.1:3000/data'
fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))