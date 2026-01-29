import { useState, useRef } from "react";
import useImgClasses from "../hooks/useImgClasses";

const Label = ({ label, error, type, setFormData }) => {
  const { classes, isActive } = useImgClasses();

  const [imgPreview, setImgPreview] = useState(null);
  const ref = useRef();

  const handleChange = () => {
    const file = ref.current.files[0];
    const url = URL.createObjectURL(file);
    setImgPreview(url);
    setFormData((prev) => ({ ...prev, image: file }));
    isActive(true);
  };

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }));
    setImgPreview(null);
    isActive(false);
  };

  return (
    <div className="space-y-2">
      <p className=" block text-sm font-semibold leading-4 text-[#334155]">
        {label} <span className="text-[#e14942] text-[16px]">*</span>
      </p>
      <div className="flex flex-col items-center justify-center gap-y-2  bg-gray-100 h-45 border border-gray-300 rounded-md border-solid relative">
        <div onClick={removeImage} type="button" className={classes.class}>
          {classes.x}
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <img className={classes.icon} src="/add-image-icon.svg" alt="" />
        </div>
        <h4 className="text-sm text-center">{classes.text}</h4>
        {!imgPreview && (
          <input
            accept="image/*"
            ref={ref}
            type={type}
            className="w-full h-full opacity-0  cursor-pointer absolute"
            onChange={handleChange}
          />
        )}
        {imgPreview && (
          <img
            className={`h-full w-full object-cover absolute ${classes.index}`}
            src={imgPreview}
            alt=""
          />
        )}
      </div>
      <p className="text-error text-xs text-red-500">{error}</p>
    </div>
  );
};

export default Label;
