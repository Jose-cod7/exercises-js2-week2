/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  const contentDiv = document.querySelector("#content")
  arrayOfPeople.forEach(function (person){
    const nameHeader = document.createElement('h1')
    const jobHeader = document.createElement('h2')
    contentDiv.appendChild(nameHeader);
    contentDiv.appendChild(jobHeader);
    nameHeader.innerText = person.name
    jobHeader.innerText = person.job
  })
}

/** 
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  const unlist = document.createElement('ul')
  const contentDiv = document.querySelector("#content");
  contentDiv.appendChild(unlist);
  for (let i = 0; i<shopping.length; i++) {
    const list = document.createElement('li')
    unlist.appendChild(list)
    list.innerText = shopping[i]
  }
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {

  books[0].cover = "https://i.postimg.cc/bJYwLH5k/book-1.jpg"
  books[1].cover = 'https://i.postimg.cc/fRh5HBcV/book2.jpg'
  books[2].cover = 'https://i.postimg.cc/KY0N8bdT/book3.jpg'

  const contentDiv = document.querySelector("#content");
  const bookList = document.createElement('ul');
  contentDiv.appendChild(bookList)
  books.forEach(function (book, index) {
    const bookDetailList = document.createElement('li')
    const bookListPara = document.createElement('p')
    const bookImg = document.createElement('img')
    if (book.alreadyRead) {
     bookDetailList.style.backgroundColor = 'green' 
    } else {
    bookDetailList.style.backgroundColor = 'red'}

    bookImg.setAttribute('src', book.cover)
    bookList.appendChild(bookDetailList)
    bookDetailList.appendChild(bookListPara)
    bookDetailList.appendChild(bookImg)
    bookListPara.innerText = book.title + ' - ' +book.author
    bookListPara.id = 'book' + index
  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris",
   job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];


exerciseThree(books);
