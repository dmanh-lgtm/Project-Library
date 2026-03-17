const myLibrary = [];
const tbody = document.querySelector(".tbody");
const buttonOpen = document.querySelector(".add_b");
const dialog = document.querySelector(".myDiaLog")
const confirm = document.querySelector("#confirm");
const author = document.querySelector("#author");
const book_name = document.querySelector("#book_name");
const pages = document.querySelector("#pages");
const select = document.querySelector("#read");
buttonOpen.addEventListener("click", () => {
    dialog.showModal();
})

confirm.addEventListener("click", () => {
    let readS = select.value;
    const book = new Book(author.value, book_name.value, pages.value, readS);
    addBookToLibrary(book);
    tbody.textContent = "";
    createBook(myLibrary);
    dialog.close();
})

function Book(author, name, pages, readS) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.author = author;
    this.name = name;
    this.pages = pages;
    this.readS = readS;
}

Book.prototype.toggleRead = function () {
    this.readS = this.readS === "yes" ? "no" : "yes";
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBook(books) {
    books.forEach((book) => {
        const row = document.createElement("tr");

        const id = document.createElement("td");
        id.textContent = book.id;

        const author = document.createElement("td");
        author.textContent = book.author;

        const name = document.createElement("td");
        name.textContent = book.name;

        const pages = document.createElement("td");
        pages.textContent = book.pages;

        const read = document.createElement("td");

        const selectDisplay = document.createElement("select");

        const optYes = document.createElement("option");
        optYes.value = "yes";
        optYes.textContent = "Read";

        const optNo = document.createElement("option");
        optNo.value = "no";
        optNo.textContent = "Not read yet";

        selectDisplay.append(optYes, optNo);
        selectDisplay.value = book.readS;

        selectDisplay.addEventListener("change", () => {
            book.readS = selectDisplay.value;
        });

        read.append(selectDisplay);

        row.append(id, author, name, pages, read);
        tbody.append(row)
    })
}
