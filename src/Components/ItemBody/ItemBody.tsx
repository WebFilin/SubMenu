import React, { FC } from "react";

import style from "./itemBody.module.css";

import BtnOpenSelect from "../Buttons/BtnOpenSelect/BtnOpenSelect";

import ItemsList from "../ItemsList/ItemsList";

function ItemBody() {
  const itemTitle = "7. В работе";

  const [isOpenSelect, setIsOpenSelect] = React.useState<boolean>(false);

  const btnOpenHandler = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <section className={isOpenSelect ? style.wrapper_active : style.wrapper}>
      <div className={style.body}>
        <h3>{itemTitle}</h3>
        <div onClick={btnOpenHandler}>
          <BtnOpenSelect isOpen={isOpenSelect} />
        </div>
      </div>
      {isOpenSelect ? <ItemsList /> : null}
    </section>
  );
}

export default ItemBody;
