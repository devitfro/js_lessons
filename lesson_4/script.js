class News {
    constructor(title, date = new Date(), text, tags = []) {
        this.title = title;
        this.date = date;
        this.text = text;
        this.tags = tags;
    }

    print() {
        document.write("<h1>");
        document.write(this.title + "<br>");
        document.write("</h1>");

        document.write("<h3>");
        document.write(News.checkDate(this.date) + "<br>");
        document.write("</h3>");

        document.write("<p>");
        document.write(this.text + "<br><br>");
        document.write("#" + this.tags.join(" #"));
        document.write("</p>");
    }

    static checkDate(publicationDate) {
        if (!(publicationDate instanceof Date)) return "";

        const today = new Date();
        const diffMonth = today - publicationDate;
        const diffInDays = Math.floor(diffMonth / (1000 * 60 * 60 * 24));

        if (diffInDays === 0) return "today";
        else if (diffInDays < 7) return `${diffInDays} days ago`;
        else {
            return publicationDate.toDateString();
        }
    }
}

let firstNews = new News(
    "Hello world",
    new Date("2020-11-11"),
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    ["firstNews", "coolNews", "news"]
);
firstNews.print();

let secondNews = new News(
    "Second news",
    new Date("2025-05-14"),
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    ["secondNews", "coolNews", "news"]
);
secondNews.print();

let anotherNews = new News(
    "Second news",
    new Date("2025-05-10"),
    "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    ["anotherNews", "coolNews", "news"]
);
anotherNews.print();


