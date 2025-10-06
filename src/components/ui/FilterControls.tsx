import React from 'react';
import CustomSelect from './CustomSelect';
import Icon from './Icon';

interface FilterControlsProps {
  cityFilter: string;
  setCityFilter: (city: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  types: string[];
}

const FilterControls: React.FC<FilterControlsProps> = ({
  cityFilter,
  setCityFilter,
  typeFilter,
  setTypeFilter,
  types,
}) => {
  return (
    <div className="flex space-x-4 px-[31px] py-[23px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Filter on city"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="border border-gray-300 rounded-md p-2 pl-4 pr-10 w-[193px] h-[39px]"
        />
        <Icon src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/arrow-down.svg`} alt="arrow down" />
      </div>
      <CustomSelect
        options={types}
        value={typeFilter}
        onChange={setTypeFilter}
        placeholder="Filter on type"
      />
    </div>
  );
};

export default FilterControls;