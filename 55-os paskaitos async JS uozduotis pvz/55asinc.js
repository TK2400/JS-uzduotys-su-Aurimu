// const url = 'https://jsonplaceholder.typicode.com/posts'
const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    gautiIdIrasa(input.value)
})

async function gautiIdIrasa(id) {
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    console.log(url)

    const response = await fetch(url)
    const result = await response.json()
    createArticle(result)
}

// uzklausa()

/*async function uzklausa() {
    const response = await fetch(url)
    const result = await response.json()

    result.forEach(createArticle);
}*/


//  cia taip pasimami duomenys is serverio ir is ju html
function createArticle(data) {
    const article = document.createElement('article')
    const id = document.createElement('h2')
    const title = document.createElement('h3')
    const paragraph = document.createElement('p')
    const userId = document.createElement('h3')

    title.innerText = data.title
    paragraph.innerText = data.body
    id.innerText = 'this is article #' + data.id
    userId.innerText = 'was written by user #id: ' + data.userId

    article.appendChild(id)
    article.appendChild(title)
    article.appendChild(paragraph)
    article.appendChild(userId)

    document.body.appendChild(article)

}