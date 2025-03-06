'use client'
import React, { useState } from 'react';

// Reusable Dropdown Component
const Dropdown = ({  
  label, 
  options, 
  type = 'checkbox',
  placeholder = 'Select Options' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionChange = (option) => {
    if (type === 'checkbox') {
      // Toggle checkbox selection
      setSelectedOptions(prev => 
        prev.includes(option) 
          ? prev.filter(item => item !== option)
          : [...prev, option]
      );
    } else {
      // Radio button selection
      setSelectedOptions([option]);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (selectedOptions.length === 0) return placeholder;
    return selectedOptions.join(', ');
  };

  return (
    <div className="filterblock relative">
      <label className="block mb-2">{label}</label>
      <div className="relative">
        <button 
          onClick={toggleDropdown}
          className="dropdown-toggle form-control text-start w-full flex justify-between items-center"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <span className="truncate">{getDisplayText()}</span>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>

        {isOpen && (
          <div 
            className="absolute z-10 w-full bg-white border rounded shadow-lg mt-1"
            role="menu"
          >
            {['Option 1', 'Option 2', 'Option 3'].map((option) => (
              <div 
                key={option} 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                <label className="flex items-center">
                  <input
                    type={type}
                    name={label.toLowerCase().replace(' ', '-')}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionChange(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
function PresaleFilters() {
  return (
    <div className="container">
          <div className="row">
                <div className="col-xl-12">
                    <div className="section-title">
                        <h5 className="h4 fw-semibold">Best Crypto Presales 2024</h5>
                        <p>Looking for the best and newest crypto presales and ICOs to invest in? You're in the right place at Cryptopresale.net. We list the most exciting upcoming and active crypto presales of 2024. Our presales overview gives you all the key details. Whether you're new to crypto or a seasoned investor, Cryptopresale is your go-to for the top presale opportunities.</p>
                    </div>
                    </div>
      <div className="filtertable grid  md:grid-cols-3 ">
        <Dropdown 
          label="Chain" 
          type="checkbox"
          placeholder="All Chains"
        />
        <Dropdown 
          label="Category" 
          type="checkbox"
          placeholder="All Categories"
        />
        <Dropdown 
          label="Platform" 
          type="checkbox"
          placeholder="All Platforms"
        />
        
        {/* Soft Cap and Hard Cap Dropdowns */}
        <div className="filterblock">
          <label className="block mb-2">Soft Cap</label>
          <select className="form-control w-full">
            <option>All Soft Caps</option>
            <option>0-1000</option>
            <option>1000-5000</option>
            <option>5000-10000</option>
          </select>
        </div>

        <div className="filterblock">
          <label className="block mb-2">Hard Cap</label>
          <select className="form-control w-full">
            <option>All Hard Caps</option>
            <option>0-5000</option>
            <option>5000-10000</option>
            <option>10000+</option>
          </select>
        </div>

        {/* Audit and KYC Sections */}
        <div className="filterblock flex items-center gap-2">
          <label>Audit</label>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
          
        </div>

        <div className="filterblock flex items-center gap-2 ">
          <label>KYC</label>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider round"></div>
          </label>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default PresaleFilters;