export const choseText = (text, checked) => {
  if (text) return text;
  return checked ? 'Following' : 'Follow';
};
