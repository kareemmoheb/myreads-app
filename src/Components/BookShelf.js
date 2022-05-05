
import { Link } from 'react-router-dom';

import Book from './Book';
import Loading from './Loading';

export default function BookShelf({ userBooks, loading, onChangeShelf }) {
    const currentReadingShelf = userBooks && userBooks.filter(book => book.shelf === "currentlyReading");
    const wantReadShelf = userBooks && userBooks.filter(book => book.shelf === "wantToRead");
    const readShelf = userBooks && userBooks.filter(book => book.shelf === "read");
    return (
        <div className="list-books">
            {loading && <Loading />}
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {currentReadingShelf && currentReadingShelf.map((book, index) => {
                                    return <Book key={index} book={book} onChangeShelf={onChangeShelf} />
                                })}
                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {wantReadShelf && wantReadShelf.map((book, index) => {
                                    return <Book key={index} book={book} onChangeShelf={onChangeShelf} />
                                })}
                            </ol>
                        </div>
                    </div>

                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {readShelf && readShelf.map((book, index) => {
                                    return <Book key={index} book={book} onChangeShelf={onChangeShelf} />
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    Add a book
                </Link>

            </div>
        </div>
    );
}