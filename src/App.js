import { useState, useEffect } from 'react';
import { getAll, update } from './BooksAPI';
import BookShelf from './Components/BookShelf';
import SearchBar from './Components/SearchBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [loading, setLoading] = useState(false);
    const [userBooks, setUserBooks] = useState(null);
    const [shelf, setShelf] = useState(null);

    function onChangeShelf(book, selectedShelf) {
        setLoading(true);
        update(book, selectedShelf).then(books => {
            setShelf(books)
        })
    }
    useEffect(() => {
        async function getAllBooks() {
            setLoading(true);
            await getAll().then((books) => {
                setUserBooks(books)
            })
            setLoading(false);
        }
        getAllBooks();
    }, [shelf])

    return (
        <div className="app">
            <Routes>
                <Route
                    path='/'
                    element={
                        <BookShelf
                            userBooks={userBooks}
                            loading={loading}
                            onChangeShelf={onChangeShelf}
                        />
                    }
                />
                <Route
                    path='/search'
                    element={
                        <SearchBar
                            currentBooks={userBooks}
                            onChangeShelf={onChangeShelf}
                            loading={loading}
                            setLoading={setLoading}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
