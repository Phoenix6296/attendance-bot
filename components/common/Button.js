/* eslint-disable @next/next/no-img-element */
import { Oval } from "react-loader-spinner";

export const Button = ({
  title,
  suffixIcon,
  prefixIcon,
  color = "transparent text-black",
  onClick,
  disabled,
  type,
  className,
  py = "py-3",
  px,
  loading,
  fontSize = "text-base",
  prefixIconStyles,
  suffixIconStyles,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading ? true : disabled}
      type={type}
      className={`${className} border border-black border-opacity-10 rounded-lg w-full ${py} ${px} flex gap-4 justify-center items-center hover:shadow-lg ${color} ${
        loading ? "bg-gray-400 cursor-not-allowed hover:shadow-none" : ""
      } ${disabled || loading ? "cursor-not-allowed" : ""}`}
    >
      {loading ? (
        <Oval
          height={16}
          width={16}
          color="#fff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#fff"
          strokeWidth={6}
          strokeWidthSecondary={6}
        />
      ) : (
        <div className="flex gap-2 items-center w-full justify-center">
          {prefixIcon ? (
            <img
              className={prefixIconStyles}
              src={prefixIcon}
              alt="view-analytics"
            />
          ) : null}
          <p className={`${fontSize} leading-6 font-semibold`}>{title}</p>
          {suffixIcon ? (
            <img
              className={suffixIconStyles}
              src={suffixIcon}
              alt="view-analytics"
            />
          ) : null}
        </div>
      )}
    </button>
  );
};
