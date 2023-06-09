export const numberMarkToString = (mark: number) => {
  // Конвертирование отметки студента в текстовый эквивалент
  if (mark < 61) {
    return 'Неуд.';
  } else if (mark >= 61 && mark < 76) {
    return 'Удовл.';
  } else if (mark >= 76 && mark < 90) {
    return 'Хорошо';
  } else {
    return 'Отлично';
  }
};
