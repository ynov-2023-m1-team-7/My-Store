import React from 'react';

const ImageComponent = ({ imagePath, altText, onMouseOver, onClick }) => {
  return (
    <div>
      <img
        className="cursor-pointer object-cover h-full w-full"
        src={imagePath}
        alt={altText}
        onMouseOver={onMouseOver}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageComponent;
