export default function Modal({ isVisible, onClose, children, center }) {
  return (
    <>
      {isVisible === true && (
        <>
          <div
            className={`slide-in-fwd-center fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50`}
            onClick={onClose}
          ></div>
          <div
            className={`slide-in-fwd-center ${
              center &&
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            } z-[2] text-white`}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
}
