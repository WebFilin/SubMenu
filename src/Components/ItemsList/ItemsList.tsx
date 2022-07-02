import React from "react";

import style from "./itemsList.module.css";

import TaskList from "../TaskList/TaskList";

import defaultTask from "../defaultTaskList/defaultTaskList";

import Autocomplete from "../Autocomplete/Autocomplete";

//  Импортируем базовый интерфейс массива
import { IItems } from "../../types/IItems";

function ItemsList() {
  const [inputValue, setInputValue] = React.useState<string>("");

  //   Состояние нажатия на поле ввода - удаляем поле автокомплита
  const [isOpen, setIsOpen] = React.useState<boolean>(true);

  const refForm = React.useRef<HTMLFormElement>(null);

  //   Фильтруем список задач по вводу
  const filteredItems = defaultTask.filter((task: IItems) => {
    return task.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  //   Добавляем выбранный элемент в поле ввода
  function itemHandlerClick(event: React.ChangeEvent<any>) {
    setInputValue(event.target.textContent);
    setIsOpen(!isOpen);
  }

  function inputClickHandler() {
    setInputValue("");
    setIsOpen(true);
  }

  React.useEffect(() => {
    const elem = refForm.current;

    function keyDownHandler(e: KeyboardEvent) {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    }

    elem &&
      elem.addEventListener("keydown", (event: KeyboardEvent) =>
        keyDownHandler(event)
      );

    return () => {
      elem && elem.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <nav className={style.wrapper}>
      <form className={style.body} ref={refForm}>
        <div className={style.input_wrapper}>
          <textarea
            className={style.input}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            onClick={inputClickHandler}
          />
        </div>

        {/* Формируем автокомплит */}
        <ul className={style.autocomplete}>
          <Autocomplete
            inputValue={inputValue}
            isOpen={isOpen}
            arrItemsAutocomplete={filteredItems}
            itemHandlerClick={itemHandlerClick}
          />
        </ul>

        <div className={style.search_img}></div>
      </form>
      <TaskList arrItemsTask={filteredItems} />
    </nav>
  );
}

export default ItemsList;
