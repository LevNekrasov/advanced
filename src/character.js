/* eslint-disable linebreak-style */
export default function specialReception(obj) {
  const { special: reception } = obj;

  reception.forEach((el) => {
    if (!el.description) {
      // eslint-disable-next-line no-param-reassign
      el.description = 'Описание недоступно';
    }
    return reception;
  });
  return reception;
}
