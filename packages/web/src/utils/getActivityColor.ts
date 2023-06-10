export const getActivityColor = (type: string) => {
  let backgroundColor = '';
  let borderColor = '';

  switch (type) {
    case 'лаб':
      backgroundColor = '#96C6FF';
      borderColor = '#0075FF';
      break;
    case 'сем':
      backgroundColor = '#FFF1DB';
      borderColor = '#FEAE3A';
      break;
    case 'лек':
      backgroundColor = '#FCDCEF';
      borderColor = '#FE71C6';
      break;
    case 'доп':
      backgroundColor = '#C5FFD2';
      borderColor = '#01BC11';
      break;
    default:
      backgroundColor = '#FFFFFF';
      break;
  }

  return [borderColor, backgroundColor];
};
