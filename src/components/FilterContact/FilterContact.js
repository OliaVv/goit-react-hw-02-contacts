import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { InputName } from 'components/App.styled';

export const FilterContact = ({ onFilter }) => {
  const filterId = nanoid();
  return (
    <div>
      <InputName htmlFor={filterId}>Find contacts by name</InputName>
      <input id={filterId} type="text" name="filter" onChange={onFilter} />
    </div>
  );
};

FilterContact.propTypes = {
  onFilter: PropTypes.func,
};
