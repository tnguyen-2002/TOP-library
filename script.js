const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}



function addBooktoTable() {
    //* Select the <tbody> element
    const tableBody = document.querySelector("#myTable tbody")
    //* Clear the table to avoid duplicate entries
    tableBody.innerHTML = "";


    for (let i = 0; i < myLibrary.length; i++) {
        //* Create a new row
        const newRow = document.createElement("tr");
        //* Add cells (collumns) to the row
        const titleCell = document.createElement("td");
        titleCell.textContent = myLibrary[i].title;
        console.log(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = myLibrary[i].author;

        const pageCell = document.createElement("td");
        pageCell.textContent = myLibrary[i].pages;

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(pageCell);

        tableBody.appendChild(newRow);
    }
}





function addBookToLibrary() {
    const form = document.getElementById("addBookForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const bookTitle = document.getElementById("bookTitle").value;
        const bookAuthor = document.getElementById("bookAuthor").value;
        const bookPages = document.getElementById("bookPages").value;



        const temptBook = new Book(bookTitle, bookAuthor, bookPages);
        myLibrary.push(temptBook);
        addBooktoTable()
    })

}

addBookToLibrary();
