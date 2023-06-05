import { useState } from "react";
import Image from "next/image";

export const Input = ({
  value,
  defaultValue,
  label,
  placeholder,
  onFocus,
  onBlur,
  disabled,
  max,
  min,
  type,
  minLength,
  maxLength,
  onChange,
  className,
  required,
  containerStyles,
  pattern,
  focusStyles,
  reference,
  onInvalid,
  onPaste,
  isShowPassword,
  style,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const inputType =
    type === "password" ? (passwordVisible ? "text" : "password") : type;

  return (
    <div className={containerStyles}>
      <div className="flex items-center gap-1">
        <div className="flex justify-between items-center w-full">
          <label className={`text-base`} htmlFor={label}>
            {label}
          </label>
        </div>
      </div>
      <div className="flex items-center mt-2 gap-1 relative">
        <input
          onInvalid={onInvalid}
          ref={reference}
          className={`${className} ${disabled ? "cursor-not-allowed" : ""} ${
            focusStyles ? focusStyles : "focus:outline-none"
          } w-full border border-black border-opacity-10 py-3 px-4 rounded-lg`}
          type={inputType}
          name={label}
          id={label}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onPaste={onPaste}
          onBlur={onBlur}
          onFocus={onFocus}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
          defaultValue={defaultValue}
          spellCheck={false}
          pattern={pattern}
          autoComplete="off"
          style={style}
        />
        {type === "password" && isShowPassword && (
          <button
            type="button"
            className="focus:outline-none absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? (
              <Image
                src="/common/openEye.svg"
                height={30}
                width={30}
                alt="Show"
              />
            ) : (
              <Image
                src="/common/closedEye.svg"
                height={30}
                width={30}
                alt="Hide"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
