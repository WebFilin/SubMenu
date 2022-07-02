import React, { FC } from "react";

import style from "./autocomplete.module.css";

//  Импортируем базовый интерфейс массива
import { IItems } from "../../types/IItems";

interface IAutocomplit {
  inputValue: string;
  isOpen: boolean;
  arrItemsAutocomplete: IItems[];
  itemHandlerClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Autocomplete: FC<IAutocomplit> = ({
  inputValue,
  isOpen,
  arrItemsAutocomplete,
  itemHandlerClick,
}) => {
  return (
    <>
      {inputValue && isOpen
        ? arrItemsAutocomplete.map((items) => (
            <li
              className={style.autocomplete_items}
              key={items.id}
              onClick={itemHandlerClick}
            >
              {items.title}
            </li>
          ))
        : null}
    </>
  );
};

export default Autocomplete;
