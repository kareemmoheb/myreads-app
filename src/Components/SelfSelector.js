export default function ShelfSelector({ currentShelf, book, onChangeShelf }) {
    return (
        <div className="book-shelf-changer">
            <select value={currentShelf || 'none'} onChange={(e) => onChangeShelf(book, e.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}