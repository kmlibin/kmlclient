import React from "react";
import { ibm } from "../utils/fonts";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  name,
  value,
  type = "text",
  error,
  onChange,
}: InputFieldProps) => (
  <div className={`${ibm.className} flex flex-col tracking-wider`}>
    <label htmlFor={name} className="text-black text-[16px]">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-xl border-2 p-3 focus:outline-none ${
        error
          ? "border-red-500 focus:ring-red-500"
          : "border-gray-300 border-opacity-50"
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default InputField;
