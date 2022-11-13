import PropTypes from 'prop-types';
export const ListItem = ({ contact: { name, phone } }) => {
  return (
    <div>{name} {phone}
    </div>
  );
};

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone:PropTypes.string.isRequired,
      }).isRequired
}