export type Answer = {
  id: number;
  text: string;
};

export type Question = {
  id: number;
  label: string;
  q: Answer[];
};

export const questions: Question[] = [
  {
    id: 0,
    label: "Что такое Vue?",
    q: [
      { id: 0, text: "Прогрессивный фреймворк для создания UI" },
      { id: 1, text: "Язык программирования" },
      { id: 2, text: "СУБД" },
      { id: 3, text: "Операционная система" },
    ],
  },
  {
    id: 1,
    label: "Что такое шаблоны (template) во Vue?",
    q: [
      { id: 0, text: "HTML-разметка с расширенным синтаксисом Vue" },
      { id: 1, text: "Тип данных JavaScript" },
      { id: 2, text: "CSS-фреймворк" },
      { id: 3, text: "Инструмент для тестирования" },
    ],
  },
  {
    id: 2,
    label: "Для чего используется ref?",
    q: [
      { id: 0, text: "Создаёт реактивное состояние" },
      { id: 1, text: "Работает только с DOM" },
      { id: 2, text: "Создаёт маршруты" },
      { id: 3, text: "Подключает стили" },
    ],
  },
  {
    id: 3,
    label: "Для чего используется watch?",
    q: [
      { id: 0, text: "Отслеживает изменения реактивных данных" },
      { id: 1, text: "Создаёт вычисляемые значения" },
      { id: 2, text: "Рендерит компонент" },
      { id: 3, text: "Определяет маршруты" },
    ],
  },
  {
    id: 4,
    label: "В чём разница между props и data?",
    q: [
      { id: 0, text: "Props приходят извне, data — локальное состояние" },
      { id: 1, text: "Props хранятся в CSS, data — в HTML" },
      { id: 2, text: "Data нельзя изменять" },
      { id: 3, text: "Props изменяются напрямую внутри компонента" },
    ],
  },
];
