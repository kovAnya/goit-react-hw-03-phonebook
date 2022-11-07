import { FilterInput } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};
