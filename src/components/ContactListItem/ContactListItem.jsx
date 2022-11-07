import { Item, DeleteBtn } from './ContactListItem.styled';

export const ContactListItem = ({ name, phone, onDelete }) => {
  return (
    <Item>
      {name}: {phone}
      <DeleteBtn type="button" data-name={name} onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
