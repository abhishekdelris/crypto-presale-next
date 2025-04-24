// "use client";

// import { useState, useEffect, useRef } from 'react';

// const SearchableDropdown = ({ 
//   options = [], 
//   placeholder = "Select an option", 
//   handleData = () => {} 
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedOption, setSelectedOption] = useState(null);
//   const dropdownRef = useRef(null);

//   const filteredOptions = options.filter(option => {
//     const searchLower = searchTerm.toLowerCase();
//     return (
//       option.label.toLowerCase().includes(searchLower) ||
//       option.tokens?.some(token => token.toLowerCase().includes(searchLower))
//     );
//   });

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     setSearchTerm('');
//     handleData(option);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(prev => !prev);
//     if (!isOpen) {
//       setTimeout(() => {
//         const searchInput = dropdownRef.current?.querySelector('input');
//         if (searchInput) searchInput.focus();
//       }, 0);
//     }
//   };

//   return (
//     <div className="mb-3" ref={dropdownRef}>
//       <button
//         type="button"
//         className="form-select text-start form-control"
//         onClick={toggleDropdown}
//       >
//         {selectedOption ? selectedOption.label : placeholder}
//       </button>

//       {isOpen && (
//         <div className="position-absolute bg-white border border-secondary rounded shadow mt-1 zindex-dropdown">
//           <div className="p-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder={placeholder}
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <ul className="list-unstyled mb-0 overflow-auto" style={{ maxHeight: "240px" }}>
//             {filteredOptions.length > 0 ? (
//               filteredOptions.map((option, index) => (
//                 <li
//                   key={index}
//                   className="dropdown-item p-2"
//                   onClick={() => handleSelect(option)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {option.label}
//                 </li>
//               ))
//             ) : (
//               <li className="dropdown-item text-muted text-center">
//                 No results found
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchableDropdown;


"use client";

import { useState, useEffect, useRef } from 'react';

const SearchableDropdown = ({ 
  options = [], 
  placeholder = "Select an option", 
  handleData = () => {},
  value = null, // new: controlled value
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const filteredOptions = options.filter(option => {
    const searchLower = searchTerm.toLowerCase();
    return (
      option.label.toLowerCase().includes(searchLower) ||
      option.tokens?.some(token => token.toLowerCase().includes(searchLower))
    );
  });

  // 🔄 Sync selected option from parent
  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSearchTerm('');
    handleData(option); // 🔁 inform parent
  };

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setTimeout(() => {
        const searchInput = dropdownRef.current?.querySelector('input');
        if (searchInput) searchInput.focus();
      }, 0);
    }
  };

  return (
    <div className="mb-3" ref={dropdownRef}>
      <button
        type="button"
        className="form-select text-start form-control"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </button>

      {isOpen && (
        <div className="position-absolute bg-white border border-secondary rounded shadow mt-1 zindex-dropdown" style={{zIndex:"15"}}>
          <div className="p-2">
            <input
              type="text"
              className="form-control"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="list-unstyled mb-0 overflow-auto" style={{ maxHeight: "240px" }}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="dropdown-item p-2"
                  onClick={() => handleSelect(option)}
                  style={{ cursor: "pointer" }}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className="dropdown-item text-muted text-center">
                No results found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
