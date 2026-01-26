import { useState } from "react";

const Label = ({ label, error, type, formData }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [zIndex, setZIndex] = useState({
    index: "z-[-2]",
    class: "",
    x: "",
  });

  const newImgClass = {};

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImgUrl(file);
      const url = URL.createObjectURL(file);
      setImgPreview(url);
      formData.image = file;
      newImgClass.index = "z-[2]";
      newImgClass.class =
        "absolute top-4 right-4 flex items-center justify-center w-6 h-6 bg-[#202124] rounded-full cursor-pointer z-[3] text-white";
      newImgClass.x = "x";
    } else {
      setImgUrl(null);
      setImgPreview(null);
      newImgClass.index = "z-[-2]";
      newImgClass.class = "";
      newImgClass.x = "";
    }
    setZIndex(newImgClass);
  };

  const removeImage = () => {
    setImgPreview(null);
    setImgUrl(null);
    setImgPreview(null);
    newImgClass.index = "z-[-2]";
    newImgClass.class = "";
    newImgClass.x = "";
    setZIndex(newImgClass);
  };

  return (
    <div className="space-y-2">
      <p className=" block text-sm font-semibold leading-4 text-[#334155]">
        {label} <span className="text-[#e14942] text-[16px]">*</span>
      </p>
      <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-45 border border-gray-300 rounded-md border-solid relative">
        <div onClick={removeImage} className={zIndex.class}>
          {zIndex.x}
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <img
            className="w-3 h-3 object-cover"
            src="/add-image-icon.svg"
            alt="img"
          />
        </div>
        <h4 className="text-sm text-center">Browse or Drop Image</h4>
        <input
          type={type}
          className="w-full h-full opacity-0  cursor-pointer absolute"
          onChange={handleChange}
        />
        <img
          className={`h-full w-full object-cover absolute ${zIndex.index}`}
          src={imgPreview}
          alt=""
        />
      </div>
      <p className="text-error text-xs text-red-500">{error}</p>
    </div>
  );
};

export default Label;
