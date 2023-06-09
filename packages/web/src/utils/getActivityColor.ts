export const getActivityColor = (type: string) => {
  let backgroundColor = '';
  let borderColor = '';

  switch (type) {
    case 'lab':
      backgroundColor = '#96C6FF';
      borderColor = '#0075FF';
      break;
    case 'seminar':
      backgroundColor = '#FFF1DB';
      borderColor = '#FEAE3A';
      break;
    case 'lection':
      backgroundColor = '#FCDCEF';
      borderColor = '#FE71C6';
      break;
    case 'extra':
      backgroundColor = '#C5FFD2';
      borderColor = '#01BC11';
      break;
    default:
      backgroundColor = '#FFFFFF';
      break;
  }

  return { borderColor, backgroundColor };
};
