import BookShelf from './Components/BookShelf';
import SearchBar from './Components/SearchBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<BookShelf />} />
                <Route path='/search' element={<SearchBar />} />
            </Routes>
        </div>
    );
}

export default App;
