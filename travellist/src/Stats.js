export default function Stats({ items }) {
  if (items.length === 0)
    return <p className="stats">Start with adding items.</p>;
  const numOfItems = items.length;
  const numOfPacketItems = items.filter((i) => i.packed).length;
  const percentage = Math.round((numOfPacketItems / numOfItems) * 100);

  return (
    <footer>
      <em className="stats">
        {numOfPacketItems !== numOfItems
          ? `You have ${numOfItems} items on your list, and you already packed${numOfPacketItems}, with percentage ${Number(
              percentage
            )}`
          : `You are done of packaging items`}
        x
      </em>
    </footer>
  );
}
