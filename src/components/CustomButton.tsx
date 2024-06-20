import React from "react";

interface PropsTypes {
  children: React.ReactNode;
  additionalStyles?: string;
}

const CustomButton: React.FC<PropsTypes> = ({ children, additionalStyles }) => {
  return (
    <div className="flex justify-center items-center my-5">
      <button
        className={`bg-primary text-text px-5 py-4 rounded-xl ${additionalStyles} hover:bg-[#463eda] hover:shadow-primary hover:shadow-btn transition duration-200 text-lg font-semibold`}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
