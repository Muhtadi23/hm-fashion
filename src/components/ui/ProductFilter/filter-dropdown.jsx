"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export default function FilterDropdown({ label, options, value = [], onChange, onClear }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Toggle selected option
    const handleToggle = (option) => {
        const newValues = value.includes(option)
            ? value.filter((v) => v !== option)
            : [...value, option];
        onChange(newValues);
    };

    // Prevent dropdown toggle when clicking clear
    const handleClearClick = (e) => {
        e.stopPropagation();
        onClear();
    };

    const hasSelection = value.length > 0;
    const displayText = hasSelection ? `${label} (${value.length})` : label;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex items-center gap-2 px-4 py-2 text-sm dark:text-white cursor-pointer
          ${hasSelection ? "border-primary" : "border-border"}`}
            >
                <span className={hasSelection ? "font-medium" : "text-foreground"}>
                    {displayText}
                </span>

                {hasSelection ? (
                    <X
                        className="h-4 w-4 text-muted-foreground hover:text-foreground"
                        onClick={handleClearClick}
                    />
                ) : (
                    <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""
                            }`}
                    />
                )}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-gray-200 dark:bg-[#434446] dark:text-white shadow-md z-50 max-h-64 overflow-y-auto">
                    {options.map((option) => {
                        const isChecked = value.includes(option);
                        return (
                            <label
                                key={option}
                                className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleToggle(option)}
                                    className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                                />
                                <span className={isChecked ? "font-medium text-foreground" : ""}>
                                    {option}
                                </span>
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
