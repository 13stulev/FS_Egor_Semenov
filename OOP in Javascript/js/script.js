const dateRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

class Library {
    get name() {
        return this._name;
    }

    set name(value) {
        if (value != null) {
            this._name = value;
        }
    }

    get books() {
        return this._books;
    }

    set books(book) {
        if ((book.id == null) && (book instanceof Book)) {
            this._books.push(book);
            book.id = this.bookId.id + 1;
            this.bookId++;
            console.log(book._name + " Была добавлена в библиотеку.");
        } else if (this._books === undefined) {
            this._books = [];
        } else {
            console.log("Это не похоже на книгу");
        }
    }


    constructor(name) {
        this.name = name;
        this.books = [];
        this.visitorId = 24600;
        this.bookId = 1;
    }

    setReturnal() {
        let curDate = new Date();
        return curDate.getDate() + "-" + (curDate.getMonth() + 2) + "-" + curDate.getFullYear();
    }

    giveABook(visitor, bookName) {
        if (visitor.id == null) {
            console.log("Добро пожаловать," + visitor.fullName + ", ваш идентификатор - " + (this.visitorId + 1));
            visitor.id = (this.visitorId + 1);
            this.visitorId++;
        }

        this._books.forEach(e => {
            if ((e._name === bookName) && (e.reservedBy == null)) {
                visitor.books.push(e);
                this._books[this._books.indexOf(e)].reservedBy = visitor.fullName;
                this._books[this._books.indexOf(e)].dateOfReturnal = this.setReturnal();
                console.log(visitor.fullName + " вы забрали " + bookName);
            } else if ((e._name === bookName) && (e.reservedBy !== null)) {
                console.log("Эта книга зарезервирована " + e.reservedBy + " до " + this._books[this._books.indexOf(e)].dateOfReturnal);
            }
        });

    }
}

class Genre {
    get type() {
        return this._type;
    }

    set type(value) {
        if (value != null) {
            this._type = value;
        }
    }

    set description(value) {
        this._description = value;
    }

    get description() {
        return this._description;
    }

    get name() {
        return this._type;
    }

    constructor(type, description) {
        this.type = type;
        this.description = description;
    }
}

class Composition extends Genre {
    set name(value) {
        if (value != null) {
            this._name = value;
        }
    }

    set author(value) {
        if (value != null) {
            this._author = value;
        }
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    constructor(author, type, description, name) {
        super(type, description)
        this.author = author;
        this.name = name;
    }
}

class Book extends Composition {
    set dateOfEdition(date) {
        if (dateRegExp.test(date))
            this._dateOfEdition = date;
    }

    constructor(Composition, dateOfEdition, id, reservedBy, dateOfReturnal) {
        super(Composition.author, Composition.type, Composition.Genre, Composition.name)
        this.dateOfEdition = dateOfEdition;
        this.id = id;
        this.reservedBy = reservedBy;
        this.dateOfReturnal = dateOfReturnal;
    }
}

class Visitor {
    get Books() {
        return this._books;
    }

    set Books(value) {
        if (value instanceof Book) {
            this._books.push(value);
        } else if (this._books === undefined) {
            this._books = [];
        }
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        if (value != null) {
            this._fullName = value;
        }
    }

    constructor(fullName, address, id, books) {
        this.fullName = fullName;
        this.address = address;
        this.id = id;
        this.books = books;
    }
}

let jean = new Visitor("Jean Valjean", "France", null, []);
let mary = new Visitor("Mary Poppins", "London", null, []);
let visitors = [jean, mary];
console.log(visitors);


let warAndPeace = new Composition("Leo Tolstoy", "novel", null, "War and Peace");
let lesMiserables = new Composition("Victor Hugo", "tragedy", null, "Les Misérables");
let fahrenheit = new Composition("Ray Bradbury", "dystopian", null, "451 Fahrenheit");

let firstBook = new Book(warAndPeace, "18-02-2000", null, null, null);
let secondBook = new Book(lesMiserables, "18-02-2000", null, null, null);
let thirdBook = new Book(fahrenheit, "18-02-2000", null, null, null);
let books = [firstBook, secondBook, thirdBook];

let britishLibrary = new Library("British Library");
britishLibrary.books = firstBook;
britishLibrary.books = secondBook;
britishLibrary.books = thirdBook;

britishLibrary.giveABook(jean, "Les Misérables");
britishLibrary.giveABook(mary, "Les Misérables");
console.log(britishLibrary);