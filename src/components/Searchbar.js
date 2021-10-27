export default function Searchbar (props) {

   function readInput(event) {
        event.preventDefault();
        props.queue(event.target[1].value);
    }

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={readInput}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Поиск изображений и фотографий"
                    />
                </form>
            </header>
        )
}
