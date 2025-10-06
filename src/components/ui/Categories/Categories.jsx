import React from "react";
import Image from "next/image";

const Categories = ({ categoryName, categoryImage }) => {
    return (
        <div className="flex flex-col items-center shadow-lg">
            <Image
                src={categoryImage}
                alt={categoryName}
                width={400}
                height={200}
                className="w-full"
            />
            <h2 className="mt-2 text-lg font-semibold text-black dark:text-white">{categoryName}</h2>
        </div>
    );
};

export default Categories;
