import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <div>
      {
        /*render a MenuItem component to each element of the props array*/
        foodItems.map((food, index) => (
          <MenuItem {...food} key={index} />
        ))
      }
      ))
    </div>
  );
}

export default MenuList;
