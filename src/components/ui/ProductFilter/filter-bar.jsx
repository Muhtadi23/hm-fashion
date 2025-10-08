"use client"

import { useState } from "react"
import FilterDropdown from "./filter-dropdown"

export default function FilterBar() {
    const [filters, setFilters] = useState({
        availability: [],
        brand: [],
        price: [],
        productType: [],
        colour: [],
        fit: [],
        size: [],
    })

    const filterOptions = {
        availability: ["In Stock", "Out of Stock", "Pre-order"],
        brand: ["Nike", "Adidas", "Puma", "Reebok", "New Balance"],
        price: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
        productType: ["Shoes", "Clothing", "Accessories", "Equipment"],
        colour: ["Black", "White", "Red", "Blue", "Green", "Yellow"],
        fit: ["Regular", "Slim", "Relaxed", "Athletic"],
        size: ["XS", "S", "M", "L", "XL", "XXL"],
    }

    const handleFilterChange = (filterName, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterName]: value,
        }))
    }

    const handleClearFilter = (filterName) => {
        setFilters((prev) => ({
            ...prev,
            [filterName]: [],
        }))
    }

    return (
        <div className="flex flex-wrap items-center gap-3 p-4">
            <FilterDropdown
                label="Availability"
                options={filterOptions.availability}
                value={filters.availability}
                onChange={(value) => handleFilterChange("availability", value)}
                onClear={() => handleClearFilter("availability")}
            />

            <FilterDropdown
                label="Brand"
                options={filterOptions.brand}
                value={filters.brand}
                onChange={(value) => handleFilterChange("brand", value)}
                onClear={() => handleClearFilter("brand")}
            />

            <FilterDropdown
                label="Price"
                options={filterOptions.price}
                value={filters.price}
                onChange={(value) => handleFilterChange("price", value)}
                onClear={() => handleClearFilter("price")}
            />

            <FilterDropdown
                label="Product type"
                options={filterOptions.productType}
                value={filters.productType}
                onChange={(value) => handleFilterChange("productType", value)}
                onClear={() => handleClearFilter("productType")}
            />

            <FilterDropdown
                label="Colour"
                options={filterOptions.colour}
                value={filters.colour}
                onChange={(value) => handleFilterChange("colour", value)}
                onClear={() => handleClearFilter("colour")}
            />

            <FilterDropdown
                label="Fit"
                options={filterOptions.fit}
                value={filters.fit}
                onChange={(value) => handleFilterChange("fit", value)}
                onClear={() => handleClearFilter("fit")}
            />

            <FilterDropdown
                label="Size"
                options={filterOptions.size}
                value={filters.size}
                onChange={(value) => handleFilterChange("size", value)}
                onClear={() => handleClearFilter("size")}
            />
        </div>
    )
}
