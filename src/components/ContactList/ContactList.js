// import PropTypes from 'prop-types';
import { ListItem } from '../ListItem/ListItem';
// import { deleteContact } from "../../redux/contactsSlice";
import { List, Item, Button } from './ContactList.styled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts,deleteContacts } from "redux/operations";
import { selectContacts,selectIsLoading, selectError,visibleContacts} from "redux/selectors";


export const ContactList = () => {
  const dispatch = useDispatch();
  // const { contacts} = useSelector(selectContacts);
  const { isLoading } = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // return (
  //   <div>
  //     {isLoading && <b>Loading tasks...</b>}
  //     {error && <b>{error}</b>}
  //     <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p>
  //   </div>
  // );

  // const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);

  //  const visibleContacts = Object.values(contacts.items).filter(contact =>
  //       contact?.name?.toLowerCase()?.includes(filter),
  //     );
  const onDeleteContact = (contact) => dispatch(deleteContacts(contact));
        return (
          <List>
            {isLoading && <b>Loading contacts...</b>}
            {error ? <b>{error}</b> :
              contacts.map((contact) => (
                    <Item key={contact.id}
                    > {<ListItem
                      contact={contact}/>}
         <Button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Удалить
        </Button></Item>
              ))
            }
            </List>
        );
    
}
