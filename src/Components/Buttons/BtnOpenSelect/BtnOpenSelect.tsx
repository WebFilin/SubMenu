import React, { FC } from "react";

import style from "./btnOpenSelect.module.css";

interface IOpen {
  isOpen: boolean;
}

const BtnOpenSelect: FC<IOpen> = ({ isOpen }) => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={isOpen ? style.icon_open : style.icon_closed} />
      </div>
    </div>
  );
};

export default BtnOpenSelect;
