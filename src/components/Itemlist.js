const Itemlist = (inf) => {
  console.log(inf.inf.data);
  let data = [];
  if (inf.inf.data.title === "Recommended") {
    console.log(inf.inf.data.itemCards);
    data = inf.inf.data.itemCards;
  } else {
    console.log(inf.inf.data.categories[0].itemCards);
    data = inf.inf.data.categories[0].itemCards;
  }
  return (
    <div>
      <ul>
        {data.map((d) => {
          return (
            <li key={d.card.info.id}>
              {d.card.info.name} {d.card.info.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Itemlist;
