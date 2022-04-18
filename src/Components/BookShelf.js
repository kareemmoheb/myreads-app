import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAll, update } from '../BooksAPI';
import Book from './Book';
import Loading from './Loading';

export default function BookShelf() {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState(null);
    const [currentReadingShelf, setCurrentReadingShelf] = useState(null);
    const [wantReadShelf, setWantReadShelf] = useState(null);
    const [readShelf, setReadShelf] = useState(null);
    function onChangeShelf(book, selectedShelf) {
        setLoading(true);
        update(book, selectedShelf).then(books => {
            setBooks(books);
        })
    }
    useEffect(() => {
        async function getAllBooks() {
            setLoading(true);
            await getAll().then((books) => {
                setCurrentReadingShelf(() => books.filter(book => book.shelf === "currentlyReading"));
                setWantReadShelf(() => books.filter(book => book.shelf === "wantToRead"));
                setReadShelf(() => books.filter(book => book.shelf === "read"));
            })
            setLoading(false);
        }
        getAllBooks();
    }, [books])
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
                    <button>Add a book</button>
                </Link>

            </div>
        </div>
    );
}