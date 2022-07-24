import { useSelector } from 'react-redux';
import { phonebookSelector } from '../redux';
import Filter from './Filter/Filter';
import Phonebook from './Phonebook/Phonebook'
import Contacts from './Contacts/Contacts';

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



