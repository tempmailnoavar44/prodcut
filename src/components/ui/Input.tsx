import React, { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ icon, className = '', style, placeholder ,...props }) => {
  return (
    <div
      className={`flex items-center bg-white rounded overflow-hidden ${className}`}
      style={style}
    >
      {icon && (
        <span className="pl-2 pr-1 flex items-center text-gray-500">
          {icon}
        </span>
      )}
      <input
        className="outline-none border-none flex-1 py-2 px-2 bg-transparent"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;