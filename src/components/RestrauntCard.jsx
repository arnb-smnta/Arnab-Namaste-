import { pic_url } from "../utils/data";
const RestrauntCard = (props) => {
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[550px] bg-green-400">
      <img
        className="foodphoto w-64 h-[250px]"
        src={pic_url + props.restraunt.info.cloudinaryImageId}
        alt="Food Photo"
      />
      <h3 className="p-2">{props.restraunt.info.name}</h3>
      <h4 className="p-2">
        Cuisines {props.restraunt.info.cuisines.join(" ")}
      </h4>
      <h4 className="p-2">Avg Rating {props.restraunt.info.avgRating} stars</h4>
      <h4 className="p-2">Cost for two {props.restraunt.info.costForTwo}</h4>
      <h4 className="p-2">Place {props.restraunt.info.areaName}</h4>
    </div>
  );
};
export default RestrauntCard;
//Higher order component
//input -restraunt card => Restarunt card component

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div className="flex justify-center">
        <div>
          <RestrauntCard restraunt={props.restraunt} />
        </div>
        <div className="absolute bg-red-400">
          Flat {props.restraunt.info.aggregatedDiscountInfoV3.header} Only{" "}
          {props.restraunt.info.aggregatedDiscountInfoV3.subHeader}
        </div>
      </div>
    );
  };
};
