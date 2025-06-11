class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    showInfo() {
        return `Title = ${this.title}\nAuthor = ${this.author}\nYear = ${this.year}`
    }
}

class Ebook extends Book {
    constructor(title, author, year, price) {
        super(title, author, year)
        this.price = price
    }

    showInfo() {
        return `${super.showInfo()}\nPrice = ${this.price}`
    }
}

let book = new Book('hello world', 'john doe', 2016)
let ebook = new Ebook('hello world', 'john doe', 2016, 16.99)

console.log(book.showInfo())
console.log(ebook.showInfo())