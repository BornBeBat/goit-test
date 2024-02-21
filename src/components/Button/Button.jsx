import classNames from 'class-names';
import { choseText } from 'utils';
import s from './Button.module.css';

export const Button = ({ onClick, text, checked = false }) => {
  const btnClass = classNames({
    [`${s.button}`]: true,
    [`${s.buttonUnchecked}`]: !checked,
    [`${s.buttonChecked}`]: checked,
  });
  return (
    <button onClick={onClick} className={btnClass}>
      {choseText(text, checked)}
    </button>
  );
};
