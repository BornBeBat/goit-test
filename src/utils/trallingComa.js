export const trallingComa = number => {
  const str = number + '';
  const reg = new RegExp(/(?<=\d)(\d{3}$)/gm);
  return str.replace(reg, ',$1');
};
