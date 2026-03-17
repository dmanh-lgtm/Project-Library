    const myLibrary = [];
    const tbody = document.querySelector(".tbody");
    const buttonOpen = document.querySelector(".add_b");
    const dialog = document.querySelector(".myDiaLog")
    const confirm = document.querySelector("#confirm");
    const author = document.querySelector("#author");
    const book_name = document.querySelector("#book_name");
    const pages = document.querySelector("#pages");
    const checkbox = document.querySelector("#checkbox");

          buttonOpen.addEventListener("click", () => {
            dialog.showModal(); 
          })

          confirm.addEventListener("click", () => {
            let readS = checkbox.checked ? "Readed" : "Not read yet";
             const book = new Book(author.value, book_name.value, pages.value, readS);
             addBookToLibrary(book);
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

    function addBookToLibrary(book){
        myLibrary.push(book);
    }

    function createBook(books){
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
        read.textContent = book.readS;

        row.append(id, author, name, pages, read);
        tbody.append(row)
    })
}
    createBook(myLibrary);
