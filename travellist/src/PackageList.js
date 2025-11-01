import { useState } from "react";
import Item from "./Item.js";

export default function PackageList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedElements;

  if (sortBy === "input") sortedElements = items;
  else if (sortBy === "description")
    sortedElements = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedElements = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  else sortedElements = items;

  return (
    <div className="list">
      <ul>
        {sortedElements.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div>
        <select value={sortBy} onClick={(e) => setSortBy(e.target.value)}>
          <option value="input">input</option>
          <option value="description">description</option>
          <option value="packaging">packaging</option>
        </select>
      </div>
      <button onClick={() => onClearItems()}>Clear List</button>
    </div>
  );
}
