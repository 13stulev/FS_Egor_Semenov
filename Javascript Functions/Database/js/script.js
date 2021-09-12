const dateRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

class Library {
    set Books(Book) {
        if (Book.id == null) {
            Book.id = this._Books[Books.length].id + 1;
        }
        this._Books.push(Book);
        console.log(Book.name + " Была добавлена в библиотеку");
    }

    constructor(name, Books) {
        this.name = name;
        this._Books = Books;
        this.visitorId = parseInt(24600);
    }

    setReturnal() {
        let curDate = new Date();
        return curDate.getDate() + "-" + (curDate.getMonth() + 2) + "-" + curDate.getFullYear();
    }

    giveABook(Visitor, bookName) {
        if (Visitor.id == null) {
            console.log("Добро пожаловать," + Visitor.fullname + ", ваш идентификатор - " + (this.visitorId + 1));
            Visitor.id = (this.visitorId + 1);
            this.visitorId++;
        }

        this._Books.forEach(e => {
            if ((e.name === bookName) && (e.reservedBy == null)) {
                Visitor.Books.push(e);
                this._Books[this._Books.indexOf(e)].reservedBy = Visitor.fullname;
                this._Books[this._Books.indexOf(e)].dateOfReturnal = this.setReturnal();
                console.log(Visitor.fullname + " вы забрали " + bookName);
            } else if ((e.name === bookName) && (e.reservedBy !== null)) {
                console.log("Эта книга зарезервирована " + e.reservedBy + " до " + this._Books[this._Books.indexOf(e)].dateOfReturnal);
            }
        });

    }
}

class Genre {
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
        this._type = type;
        this._description = description;
    }
}

class Composition extends Genre {
    get name() {
        return this._name;
    }

    get Genre() {
        return this._Genre;
    }

    get author() {
        return this._author;
    }

    constructor(author, type, description, name) {
        super(type, description)
        this._author = author;
        this._name = name;
    }
}

class Book extends Composition {
    set dateOfEdition(date) {
        if (date.test(dateRegExp))
            this._dateOfEdition = value;
    }

    constructor(Composition, dateOfEdition, id, reservedBy, dateOfReturnal) {
        super(Composition.author, Composition.type, Composition.Genre, Composition.name)
        this._dateOfEdition = dateOfEdition;
        this.id = id;
        this.reservedBy = reservedBy;
        this.dateOfReturnal = dateOfReturnal;
    }
}

class Visitor {
    constructor(fullName, address, id, Books) {
        this.fullname = fullName;
        this.address = address;
        this.id = id;
        this.Books = [Books];
    }
}

let jean = new Visitor("Jean Valjean", "France", null, null);
let mary = new Visitor("Mary Poppins", "London", null, null);
let visitors = [jean, mary];
console.log(visitors);

let warAndPeace = new Composition("Leo Tolstoy", "novel", null, "War and Peace");
let lesMiserables = new Composition("Victor Hugo", "tragedy", null, "Les Misérables");
let fahrenheit = new Composition("Ray Bradbury", "dystopian", null, "451 Fahrenheit");

let firstBook = new Book(warAndPeace, "18-02-2000", 1, null, null);
let secondBook = new Book(lesMiserables, "18-02-2000", 2, null, null);
let thirdBook = new Book(fahrenheit, "18-02-2000", 23, null, null);
let books = [firstBook, secondBook, thirdBook];

let britishLibrary = new Library("British Library", books);
britishLibrary.giveABook(jean, "Les Misérables");
britishLibrary.giveABook(mary, "Les Misérables");
console.log(britishLibrary);
