import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { phonebookSelector, phonebookOperation } from '../../redux';
import s from './contacts.module.css';

export default function Contacts() {
        const contacts = useSelector(phonebookSelector.getFilterContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phonebookOperation.fetchContacts());
    }, [dispatch]);

    return (
        <ul className={s.list}>
                     {contacts.map(({ id, name, number }) => (
                            <li className={s.item} key={id}>
                                <p className={s.text}>
                                    {name} : {number};
                                </p>
                                <button
                                    className={s.btn}
                                    type="button"
                                    onClick={() => dispatch(phonebookOperation.deleteContact(id))}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                </ul>
         
  );
}