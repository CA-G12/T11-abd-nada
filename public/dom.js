const button = document.querySelector('.button')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
button.addEventListener('click', () => {
    fetch('/api/v1/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({bookName:input.value, bookdescription:textarea.value})
    }).then(data => data.json()).then(res => renderCards(res.rows) )
})

const renderCards = (books) => {
    const booksContainer = document.querySelector('#booksContainer');

    // booksContainer.textContent = ''

    books.forEach(book => {
        const container = document.createElement('div')
        container.classList.add('container')
        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')
        const title = document.createElement('h3');
        title.classList.add('title')
        
        const img = document.createElement('img')
        const description = document.createElement('p');
        const author = document.createElement('h3');
        console.log(container);
        img.src = 'https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png'
        title.textContent = book.name
        author.textContent = book.author
        description.textContent = book.description
        container.id = book.id

        container.appendChild(img)
        container.appendChild(wrapper)
        wrapper.appendChild(title)
        wrapper.appendChild(author)
        wrapper.appendChild(description)

        booksContainer.appendChild(container) 
    });
}

fetch('/api/v1/books').then(data => data.json()).then(renderCards)
