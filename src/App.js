import BooksList from './Components/BooksList';
import SearchBar from './Components/SearchBar';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {

    return (
        <div className="app">
            <BooksList />
            <Routes>
                <Route path='/search' element={<SearchBar />} />
            </Routes>
        </div>
    );
}

export default App;
