import React, { useState } from "react";
import styles from './DropDownButton.module.css'

interface DropDownButtonProps {
    type: string;
}

const DropDownButton = ({ type }: DropDownButtonProps) => {
    const [selectedOption, setSelectedOption] = useState(type);
    const [isOpen, setIsOpen] = useState(false);
    const options = ["Continent", "Continent1", "Continent2", "Continent3", "Continent4", "Continent5"];

    const handleClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);

    };

    return (
        <div className={styles.dropdown}>
            <button className={`${styles.btn} ${styles.btnPrimary}`} type="button" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </button>
            {isOpen && (
                <div className={styles.dropdownContent}>
                    {options.map((option, index) => (
                        <a
                            key={index}
                            href="#"
                            onClick={() => handleClick(option)}
                            className={styles.dropdownItem}
                        >
                            {option}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDownButton;