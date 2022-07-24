import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts-actions';
import s from './filter.module.css';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      ></input>
    </label>
  );
}