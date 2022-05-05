import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { search } from '../BooksAPI';
import Book from './Book';
import Loading from './Loading';

export default function SearchBar({ onChangeShelf, currentBooks, loading }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [resultBooks, setResultBooks] = useState(null);
    function getSearchResults(term) {
        if (term !== '') {
            search(term).then(result => {
                if (result.error) {
                    setResultBooks(null);
                    return;
                } else {
                    setResultBooks(result);
                }
            });
        } else {
            setResultBooks(null)
        }
    }
    function changeHandler(e) {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchResults(searchTerm);
        }, 400);

        return (() => clearTimeout(timer))
    }, [searchTerm])
    return (
        <div className="search-books">
            {loading && <Loading />}
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                You can find these search terms here:
                                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                you don't find a specific author or title. Every search is limited by search terms.
                            */}
                    <input type="text" value={searchTerm} onChange={changeHandler} placeholder="Search by title or author" aria-label="Search Bar" />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {resultBooks && resultBooks.map(book => {
                        currentBooks.map(currentBook => {
                            if (currentBook.id === book.id) {
                                book.shelf = currentBook.shelf
                            }
                            return currentBook;
                        })
                        return <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
                    })}
                </ol>
            </div>
        </div>
    );
}