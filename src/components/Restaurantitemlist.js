const Restaurantitemlist = (data) => {
  console.log(data.data.title);
  return (
    <div className="w-6/12 mx-auto my-6 bg-gray-400 text-2xl flex justify-between ">
      <span>{data.data.title}</span>
      <span>⬇️</span>
    </div>
  );
};

export default Restaurantitemlist;
