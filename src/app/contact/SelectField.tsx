import React from "react";
import { ibm } from "../utils/fonts";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = ({ label, name, value, options, onChange }: SelectFieldProps) => (
    <div className={`${ibm.className} flex flex-col tracking-wider`}>
    <label className="text-black text-[16px]">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border-2 p-3 border-gray-300 border-opacity-50"
      required
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;