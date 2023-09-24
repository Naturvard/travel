export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items into your list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <div>
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You are already set and ready to go ✈️"
            : `You have ${numItems} items in your list, and you have already packed ${numPacked} (${percentage}%)`}
        </em>
      </footer>
    </div>
  );
}
