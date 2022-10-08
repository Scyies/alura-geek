import React, { InputHTMLAttributes } from "react";

interface Props  extends InputHTMLAttributes<HTMLInputElement>{
  label: string
}

export default function InputWLabel({label, ...rest}: Props) {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md px-3 py-2">
      <label htmlFor="" className="text-gray/50 text-xs">
        {label}
      </label>
      <input className="outline-none bg-white" {...rest} />
    </div>
  );
}
