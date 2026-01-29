import { useState } from "react";

const useImgClasses = () => {
  const [classes, setClasses] = useState({
    index: "z-[-2]",
    class: "",
    x: "",
    text: "Browse or Drop Image",
    icon: "/add-image-icon.svg",
  });
  const newImgClass = {};
  const isActive = (condition) => {
    if (condition === true) {
      newImgClass.index = "z-[2]";
      newImgClass.class =
        "absolute top-4 right-4 flex items-center justify-center w-6 h-6 bg-[#202124] rounded-full cursor-pointer z-[3] text-white";
      newImgClass.x = "x";
      newImgClass.icon = "z-[-999]";
      newImgClass.text = "";
    } else {
      newImgClass.index = "z-[-2]";
      newImgClass.class = "";
      newImgClass.x = "";
      newImgClass.text = "Browse or Drop Image";
      newImgClass.icon = "w-3 h-3 object-cover";
    }
    setClasses(newImgClass);
  };
  return {
    classes,
    isActive,
  };
};

export default useImgClasses;
