export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>{" "}
      </p>
    );
  // derived States
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const per = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        {per === 100
          ? "You have got everything! Ready to go"
          : `You have ${numItems} items om your list , and you already packed
        ${numPacked} . ( ${per} %)`}
      </p>
    </footer>
  );
}
