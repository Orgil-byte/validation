import { useState } from "react";

const Label = ({ label, error, type }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setImgUrl(file);
      const url = URL.createObjectURL(file);
      setImgPreview(url);
    } else {
      setImgUrl(null);
      setImgPreview(null);
    }
  };
  console.log(imgUrl);

  // if (imgUrl !== "") {
  //   const blob = new Blob(imgUrl);
  //   console.log(blob);

  //   const preview = URL.createObjectURL(blob);
  //   console.log(preview);

  //   setImgPreview(preview);
  // }
  // console.log(imgPreview);

  return (
    <div className="space-y-2">
      <p className=" block text-sm font-semibold leading-4 text-[#334155]">
        {label} <span className="text-[#e14942] text-[16px]">*</span>
      </p>
      <div className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-gray-100 h-45 border border-gray-300 rounded-md border-solid relative">
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
          className="w-full h-full  cursor-pointer absolute"
          onChange={handleChange}
        />
        <img src={imgPreview} alt="" />
      </div>

      <p className="text-error text-xs text-red-500">{error}</p>
    </div>
  );
};

export default Label;
