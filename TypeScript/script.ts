const dateRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

type numOrString = number | string;

interface IGettersAndSetters {
    get id(): numOrString;

    set id(value: numOrString);
}

class Library implements IGettersAndSetters {

    private _visitorId: number;
    private _id: numOrString;
    private _name: string;
    private _books: Book[];

    get visitorId(): number {
        return this._visitorId;
    }

    set visitorId(value: number) {
        this._visitorId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value != null) {
            this._name = value;
        }
    }

    get books(): Book[] {
        return this._books;
    }


    set books(book: Book[]) {
        if (this.books === undefined) {
            this._books = [];
            return;
        }
        for (let i = 0; i < book.length; i++) {
            this.books.push(book[i]);
            book[0].id = <number>this.id + 1;
            this.id = <number>this.id + 1;
            console.log(book[i].name + " Была добавлена в библиотеку.");
        }
    }


    constructor(name) {
        this._name = name;
        this._books = [];
        this._visitorId = 24600;
        this._id = 1;
    }

    get id(): numOrString {
        return this._id;
    }

    set id(value: numOrString) {
        this._id = value;
    }

    setReturnal() {
        let curDate = new Date();
        return curDate.getDate() + "-" + (curDate.getMonth() + 2) + "-" + curDate.getFullYear();
    }

    pushBook(book: Book) {
        if ((book.id == null)) {
            this.books.push(book);
            book.id = <number>this.id + 1;
            this.id = <number>this.id + 1;
            console.log(book.name + " Была добавлена в библиотеку.");
        } else if (this.books === undefined) {
            this._books = [];
        } else {
            console.log("Это не похоже на книгу");
        }
    }

    giveABook(visitor, bookName) {
        if (visitor.id == null) {
            console.log("Добро пожаловать," + visitor.fullName + ", ваш идентификатор - " + (this.visitorId + 1));
            visitor.id = (this.visitorId + 1);
            this.visitorId++;
        }

        this.books.forEach(e => {
            if ((e.name === bookName) && (e.reservedBy == null)) {
                visitor.books.push(e);
                this.books[this.books.indexOf(e)].reservedBy = visitor.fullName;
                this.books[this.books.indexOf(e)].dateOfReturn = this.setReturnal();
                console.log(visitor.fullName + " вы забрали " + bookName);
            } else if ((e.name === bookName) && (e.reservedBy !== null)) {
                console.log("Эта книга зарезервирована " + e.reservedBy + " до " + this.books[this.books.indexOf(e)].dateOfReturn);
            }
        });

    }
}


class Genre {
    private _type: string;
    private _description: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        if (value != null) {
            this._type = value;
        }
    }

    set description(value: string) {
        if (value != null) {
            this._description = value;
        }
    }

    get description(): string {
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

    private _author: string;
    private _name: string;

    set name(value: string) {
        if (value != null) {
            this._name = value;
        }
    }

    set author(value: string) {
        if (value != null) {
            this._author = value;
        }
    }

    get name(): string {
        return this._name;
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

class Book extends Composition implements IGettersAndSetters {


    id: numOrString;
    private _reservedBy: string;
    private _dateOfReturn: string;
    private _dateOfEdition: string;
    set dateOfEdition(date: string) {
        if (dateRegExp.test(date))
            this._dateOfEdition = date;
    }

    get reservedBy(): string {
        return this._reservedBy;
    }

    set reservedBy(value: string) {
        this._reservedBy = value;
    }

    get dateOfReturn(): string {
        return this._dateOfReturn;
    }

    set dateOfReturn(value: string) {
        this._dateOfReturn = value;
    }

    constructor(Composition, dateOfEdition, id, reservedBy, dateOfReturnal) {
        super(Composition.author, Composition.type, Composition.Genre, Composition.name)
        this._dateOfEdition = dateOfEdition;
        this.id = id;
        this._reservedBy = reservedBy;
        this._dateOfReturn = dateOfReturnal;
    }
}

class Visitor {
    private id: number;
    private _address: string;
    private readonly _fullName: string;
    private _books: Book[];


    get address() {
        return this.address;
    }

    set address(value: string) {
        if (value != null) {
            this._address = value;
        }
    }

    get books(): Book[] {
        return this._books;
    }

    set books(value: Book[]) {
        if (value instanceof Book) {
            this._books.push(value);
        } else if (this.books === undefined) {
            this._books = [];
        }
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        if (value != null) {
            this.fullName = value;
        }
    }

    constructor(fullName, address, id, books) {
        this._fullName = fullName;
        this._address = address;
        this.id = id;
        this._books = books;
    }
}

type ConstructorType<T> = new(...args: any[]) => T;

// Декоратор с фабрикой

const typeOfClass = (constructor: Function) => {
    return function (ctor: ConstructorType<any>, ...args: any[]) {
        console.log(`Object ${arguments[0].name} has been created`);
        return constructor(ctor, ...args);
    }
};


let createObject = function (ctor: ConstructorType<any>, ...args: any[]) {
    return new ctor(...args);
}

createObject = typeOfClass(createObject);

console.log(createObject);

let jean: Visitor = createObject(Visitor, "Jean Valjean", "France", null, []);
let mary: Visitor = createObject(Visitor, "Mary Poppins", "London", null, []);
let visitors = [jean, mary];


let warAndPeace: Composition = createObject(Composition, "Leo Tolstoy", "novel", null, "War and Peace");
let lesMiserables: Composition = createObject(Composition, "Victor Hugo", "tragedy", null, "Les Misérables");
let fahrenheit: Composition = createObject(Composition, "Ray Bradbury", "dystopian", null, "451 Fahrenheit");

let firstBook: Book = createObject(Book, warAndPeace, "18-02-2000", null, null, null);
let secondBook: Book = createObject(Book, lesMiserables, "18-02-2000", null, null, null);
let thirdBook: Book = createObject(Book, fahrenheit, "18-02-2000", null, null, null);
let books = [firstBook, secondBook, thirdBook];

let britishLibrary = createObject(Library, "British Library");
britishLibrary.pushBook(firstBook);
britishLibrary.pushBook(secondBook);
britishLibrary.pushBook(thirdBook);

britishLibrary.giveABook(jean, "Les Misérables");
britishLibrary.giveABook(mary, "Les Misérables");
console.log(britishLibrary);
