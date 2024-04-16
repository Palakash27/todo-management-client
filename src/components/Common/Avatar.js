import React from "react";

const Avatar = ({ src, alt, onClick, width = 96, height = 96 }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-full cursor-pointer"
            onClick={onClick}
        />
    );
};

export default Avatar;
