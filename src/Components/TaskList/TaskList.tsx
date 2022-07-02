import React, { FC } from "react";

import style from "./tasckList.module.css";

//  Импортируем базовый интерфейс массива
import { IItems } from "../../types/IItems";

interface Tasks {
  arrItemsTask: IItems[];
}

const TaskList: FC<Tasks> = ({ arrItemsTask }) => {
  return (
    <ul className={style.wrapper}>
      {arrItemsTask.map((task: IItems) => (
        <li
          className={style.item}
          style={{ background: task.background, color: task.colorTxt }}
          key={task.id}
        >
          {task.id}. {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
