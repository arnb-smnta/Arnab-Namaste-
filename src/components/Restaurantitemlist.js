import Itemlist from "./Itemlist";

const Restaurantitemlist = (data) => {
  console.log(data);

  return (
    <div
      key={data.data.title}
      className="w-6/12 mx-auto shadow-black my-6 bg-gray-400 text-2xl  "
    >
      <div className="flex justify-between">
        <span>{data.data.title}</span>
        <span>⬇️</span>
      </div>
      <Itemlist inf={data} />
    </div>
  );
};

export default Restaurantitemlist;
