// Список задач по умолчанию

import { IItems } from "../../types/IItems";

const arrTask: IItems[] = [
  { id: 1, title: "Ожидает оценки", background: "yellow", colorTxt: "" },
  {
    id: 2,
    title: "Оценена, ожидает подтверждения оценки",
    background: "purple",
    colorTxt: "white",
  },
  {
    id: 3,
    title: "Оценка отклонена",
    background: "orangered",
    colorTxt: "blue",
  },
  {
    id: 4,
    title: "Оценка подтверждена, ожидает принятия в разработку",
    background: "whitesmoke",
    colorTxt: "green",
  },
  {
    id: 5,
    title: "В очереди к исполнению",
    background: "white",
    colorTxt: "",
  },
  { id: 6, title: "Пауза", background: "grey", colorTxt: "white" },
  { id: 7, title: "В работе", background: "green", colorTxt: "yellow" },
  {
    id: 8,
    title: "Тестирование менеджером",
    background: "lightgrey",
    colorTxt: "red",
  },
  {
    id: 9,
    title: "На проверку на тесте",
    background: "orange",
    colorTxt: "purple",
  },
];

export default arrTask;
