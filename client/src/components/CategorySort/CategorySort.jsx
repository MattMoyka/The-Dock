import "./CategorySort.css";

// on click the item cards being dsiplayed will need to have the items with the corrosponding category display
// the on click will do a handle event function that will do the sort, so maybe need 7 different handdle events??
// if !category == Sports, remove card?

// if (!category == Sports) {
// }

export default function CategorySort(props) {
  return (
    <div className="category-listing">
      <button onClick={() => console.log("All")} className="ind-category">
        All
      </button>
      {/* <button onClick={() => console.log("Sports")} className="ind-category"> */}
      <button
        onClick={() => props.handleCategorySort("Sports")}
        className="ind-category"
      >
        Sports
      </button>
      <button onClick={() => console.log("Outdoor")} className="ind-category">
        Outdoor
      </button>
      <button onClick={() => console.log("Holiday")} className="ind-category">
        Holiday
      </button>
      <button onClick={() => console.log("Furniture")} className="ind-category">
        Furniture
      </button>
      <button onClick={() => console.log("Services")} className="ind-category">
        Services
      </button>
      <button onClick={() => console.log("Tools")} className="ind-category">
        Tools
      </button>
    </div>
  );
}
