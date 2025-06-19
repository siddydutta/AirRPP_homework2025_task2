import React from 'react';

interface DropdownProps {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  className = ""
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-white text-sm font-medium mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 bg-[#303033] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#303033] text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;