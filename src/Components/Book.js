import ShelfSelector from './SelfSelector';
export default function Book({ book, onChangeShelf }) {
    const title = book.title;
    const cover = book.imageLinks && book.imageLinks.thumbnail;
    const authors = book.authors;
    const currentShelf = book.shelf;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover || '/fallback.jpg'})` }}></div>
                    <ShelfSelector currentShelf={currentShelf} book={book} onChangeShelf={onChangeShelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">
                    {authors && authors.map((author, index) => <span key={index}>{author} <br /></span>)}
                </div>
            </div>
        </li>
    );
}