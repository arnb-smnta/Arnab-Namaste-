import { pic_url } from "../utils/data";
const RestrauntCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="foodphoto"
        src={pic_url + props.restraunt.info.cloudinaryImageId}
        alt="Food Photo"
      />
      <h3>{props.restraunt.info.name}</h3>
      <h4>Cuisines {props.restraunt.info.cuisines.join(" ")}</h4>
      <h4>Avg Rating {props.restraunt.info.avgRating} stars</h4>
      <h4>Cost for two {props.restraunt.info.costForTwo}</h4>
      <h4>Place {props.restraunt.info.areaName}</h4>
    </div>
  );
};
export default RestrauntCard;
