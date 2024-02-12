/* eslint-disable react/prop-types */
function Stats({ items }) {
    if (!items.length) {
      return (
        <footer className="stats">
          <em>Start adding your items</em>
        </footer>
      );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        {percentage == 100
          ? "You are ready to go ⭕"
          : `You have ${numItems} items on your list and you already packed ${numPacked} (${percentage}%)`}
      </footer>
    );
}
  

  
  export default Stats