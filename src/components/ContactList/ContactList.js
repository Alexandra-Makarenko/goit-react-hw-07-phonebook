// import PropTypes from 'prop-types';
import { ListItem } from '../ListItem/ListItem';
// import { deleteContact } from "../../redux/contactsSlice";
import { List, Item } from './ContactList.styled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { visibleContacts} from "redux/selectors";


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
        <List>{contacts.map((contact) => (
                <Item key={contact.id}> {
                  <ListItem contact={contact}/>}
                </Item>
              ))
            }
        </List>
        );
    
}
