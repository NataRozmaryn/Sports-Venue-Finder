import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[193px]" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={placeholder}
        className={`border border-gray-300 rounded-md p-2 pl-4 pr-10 w-full h-[39px] text-left flex justify-between items-center ${
          !value ? 'text-gray-400' : ''
        }`}
      >
        <span>{value || placeholder}</span>
        <Icon src="/arrow-down.svg" alt="arrow down" />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div
            onClick={() => handleSelect('')}
            className="p-2 hover:bg-gray-100 cursor-pointer"
          >
            &nbsp;
          </div>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-2 hover:bg-gray-100 cursor-pointer ${
                value === option ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;