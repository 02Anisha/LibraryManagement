function addBookToLibrary() {

    const bookTitle = bookTitleInput.value;
    const bookAuthor = bookAuthorInput.value;

    if (bookTitle && bookAuthor) {
        let books = JSON.parse(localStorage.getItem("books")) || [];
        books.push({ title: bookTitle, author: bookAuthor });
        localStorage.setItem("books", JSON.stringify(books));

        bookTitleInput.value = "";
        bookAuthorInput.value = "";

        displayBooks();
    }
}

function displayBooks() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    booksList.innerHTML = "";
    books.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} by ${book.author}`;
        booksList.appendChild(listItem);
    });
}

// Get references to elements
const bookTitleInput = document.getElementById("bookTitle");
const bookAuthorInput = document.getElementById("bookAuthor");
const booksList = document.getElementById("booksList");
const addBookForm = document.getElementById("add-book-form");

addBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
});

displayBooks();
