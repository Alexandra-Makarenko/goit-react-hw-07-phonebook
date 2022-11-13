
import { useDispatch } from "react-redux";
import { Label, Input, Form } from './ContactForm.styled';
import { contactsReducer } from "../../redux/contactsSlice";

export const ContactForm = () => {
  
  const dispatch = useDispatch();

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   dispatch(contactsReducer(form.elements.name.value,form.elements.number.value));
  //   form.reset();
  // };

  return (
    <Form >
      <Label>
        Name
        <Input
         type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          
          />
      </Label>
      <Label>
        Phone
        <Input
         type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
         
          />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );

}