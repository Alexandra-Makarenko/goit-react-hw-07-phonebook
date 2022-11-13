import PropTypes from 'prop-types';
import {deleteContacts } from "redux/operations";
import { useDispatch } from "react-redux";
import { Button } from '../ContactList/ContactList.styled';


export const ListItem = ({ contact: { name, phone,id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContacts(id));

  
  return (
    <div>{name} {phone} {id}
      <Button
          type="button"
          onClick={onDeleteContact}
        >Удалить</Button>
    </div>
  );
};

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone:PropTypes.string.isRequired,
      }).isRequired
}