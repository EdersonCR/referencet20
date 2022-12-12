import { Tooltip } from "@mui/material";
import React from "react";
import { GiIronCross } from "react-icons/gi";
import { IoStar } from "react-icons/io5";

interface iconsItemProps {
  icons: string[];
  style: any;
}

function IconsItem(props: iconsItemProps) {

  const iconMap: any = {
    armorPenalty: {
      text: 'Penalidade de Armadura',
      icon: <GiIronCross style={props.style} />
    },
    treined: {
      text: 'Apenas Treinado',
      icon: <IoStar style={props.style} />
    }
  }

  return (
    <>
      {props.icons.map((icon, index) => (
        <Tooltip title={iconMap[icon].text} key={index}>
          <div>
            {iconMap[icon].icon}
          </div>
        </Tooltip>
      ))}
    </>
  );
}

export default IconsItem;