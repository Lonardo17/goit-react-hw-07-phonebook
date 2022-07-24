import { useSelector } from 'react-redux';
import { phonebookSelector } from '../redux';
import Filter from './filter/Filter';
import Phonebook from './phonebook/Phonebook'
import Contacts from './contacts/Contacts';

export function App() {
    const loading = useSelector(phonebookSelector.getLoading);
    return (
      <div>
        <div>
          <Phonebook/>
        </div>

        <div>
          <h2>Contacts</h2>
          <Filter />
          {loading && <h1>Loading...</h1>}
          <Contacts/>
        </div>
      </div>
    );
  }



