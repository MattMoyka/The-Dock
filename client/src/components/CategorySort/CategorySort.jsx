import "./CategorySort.css";

export default function CategorySort(props) {
  return (
    <div className="category-listing">
      <button
        onClick={() => props.handleSearchCatAll()}
        className="ind-category"
      >
        All
      </button>
      <button
        onClick={() => props.handleSearchCat("Sports")}
        className="ind-category"
      >
        Sports
      </button>
      <button
        onClick={() => props.handleSearchCat("Outdoor")}
        className="ind-category"
      >
        Outdoor
      </button>
      <button
        onClick={() => props.handleSearchCat("Holiday")}
        className="ind-category"
      >
        Holiday
      </button>
      <button
        onClick={() => props.handleSearchCat("Furniture")}
        className="ind-category"
      >
        Furniture
      </button>
      <button
        onClick={() => props.handleSearchCat("Services")}
        className="ind-category"
      >
        Services
      </button>
      <button
        onClick={() => props.handleSearchCat("Tools")}
        className="ind-category"
      >
        Tools
      </button>
    </div>
  );
}
