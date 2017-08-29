# Installation
Clone repository
Run `npm install && npm start`

# Architecture
<pre>
App
 x - state.books
 x - componentDidMount(BooksAPI.getAll)
 x - updateShelf // updates books state using this.setState
 |
 BookShelf (main) -------- Book
 |                           |
 |                         ShelfChanger //calls updateShelf onChange
 |      
 ListBooks (search) -------- Book
                              |
                           ShelfChanger //calls updateShelf onChange
</pre>

This app handles two views, the Main page which contains the `<BookShelf>` component that is reponsible in listing books on shelf and the Search page where user input is accepted as query to `BooksAPI` search function. Each view uses `<Book>` component that renders properties of Book object, attached to this component is the `<ShelfChanger>` component that listens to change event when user change the book shelf. 

# Improvements
Please submit an issue and tag as enhancement ✌