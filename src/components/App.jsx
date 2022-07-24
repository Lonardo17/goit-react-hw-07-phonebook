import Filter from './filter/Filter';
import Phonebook from './phonebook/Phonebook'
import Contacts from './contacts/Contacts';

export function App() {
    return (
      <div>
        <div>
          <Phonebook/>
        </div>

        <div>
          <h2>Contacts</h2>
          <Filter/>
          <Contacts/>
        </div>
      </div>
    );
  }


