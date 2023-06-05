import Link from "next/link";

const Dropdown = ({ setShow, _className }) => {
  return (
    <>
      <div
        className={`${_className} swing-in-top-fwd z-[20] absolute flex flex-col rounded-xl bg-white overflow-hidden shadow-lg focus:outline-none`}
      >
        <Link
          href="/register"
          className="flex items-center xl:gap-5 gap-3 xl:w-[300px] px-6 py-3 hover:bg-gray-100"
          onClick={() => setShow(false)}
        >
          <span className="xl:text-xl text-grayDarker">Register</span>
        </Link>
        <Link
          href="/attendance"
          className="flex items-center xl:gap-5 gap-3 text-grayDarker xl:w-[300px] px-6 py-3 hover:bg-gray-100"
          onClick={() => setShow(false)}
        >
          <span className={`xl:text-xl text-base`}>Attendance</span>
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
