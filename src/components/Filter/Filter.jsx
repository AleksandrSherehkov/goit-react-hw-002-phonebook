import PropTypes from 'prop-types';
export const Filter = ({ filter, changeFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        placeholder="Enter name"
        name="filter"
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
