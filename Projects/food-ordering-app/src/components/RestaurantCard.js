import {IMG_URL} from "../utils/constants.js";

const RestaurantCard = ({ restaurant }) => {
  const { name, avgRating, sla, cuisines, cloudinaryImageId } = restaurant;
  return (
    <div className="restaurant">
      <img src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>
        {avgRating}⭐ {sla.slaString}
      </h5>
      <h5>{cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestaurantCard;
