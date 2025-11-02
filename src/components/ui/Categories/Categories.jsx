'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCategories } from "@/Utils/API/category";


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [getCategoryIsLoading, setGetCategoryIsLoading] = useState(false);

    const fetchCategories = async () => {
        try {
            setGetCategoryIsLoading(true);
            const result = await getCategories();

            if (result?.success) {
                setCategories(result.data);
            } else {
                console.error("Failed to fetch categories:", result);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setGetCategoryIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    if (getCategoryIsLoading) {
        return <p className="text-center text-gray-500 mt-5">Loading categories...</p>;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="flex flex-col items-center shadow-lg"
                >
                    <Image
                        src={category.image || "/Weddings.webp"}
                        alt={category.name}
                        width={400}
                        height={200}
                        className="w-full"
                    />
                    <h2 className="mt-2 text-lg font-semibold text-black dark:text-white">
                        {category.name}
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default Categories;
