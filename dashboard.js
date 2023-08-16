document.addEventListener("DOMContentLoaded", function() {
    const books = [];

    const bookForm = document.getElementById("add-book-form");
  const booksList = document.getElementById("selected-books");

    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("bookTitle");
        const author = document.getElementById("bookAuthor").value;

        if (title.value.trim() === "" || author.trim() === "") {
            alert("Please fill in all fields");
            return;
        }

        const book = {
            title: title,
            author: author,
        };

        books.push(book);
        displayBooks();
        bookForm.reset();
    });

    function displayBooks() {
        booksList.innerHTML = "";

        books.forEach(function(book) {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${book.title}</strong> by ${book.author}`;
            booksList.appendChild(li);
        });
    }
});
