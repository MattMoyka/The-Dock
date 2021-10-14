import './Search.css'

const Search = (props) => {
    return (
        <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
        <input
          className="search-input"
          value={props.value}
          onChange={(e) => props.handleSearch(e)}
          name="Search"
          placeholder="&#xf002; &nbsp;Search Item" class="fontAwesome-search"
          type="text"
          autoFocus
            />
        </form>
    )
}

export default Search