import { useDispatch, useSelector } from 'react-redux';
import { phonebookAction, phonebookSelector } from '../../redux';
import s from './filter.module.css';

export default function Filter() {
  const filter = useSelector(phonebookSelector.getFilter);
    const dispatch = useDispatch();
  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(phonebookAction.changeFilter(e.target.value))}
      ></input>
    </label>
  );
}