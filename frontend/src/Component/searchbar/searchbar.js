import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    if (onSearch) {
      onSearch(newValue); // Call the parent component's search function if provided
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <svg
          style={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Find your rare moments..."
          style={styles.input}
        />
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  inputContainer: {
    position: 'relative',
    width: '400px', // Increased width of the container
    borderRadius: '12px', // More pronounced border radius
    overflow: 'hidden', // Ensure child elements are clipped to the border radius
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease', // Smooth transition for the hover effect
  },
  icon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#333',
  },
  input: {
    padding: '10px 10px 10px 40px', // Space for the icon
    width: '100%',
    fontSize: '16px',
    border: 'none', // Remove the border from the input to use container's border
    borderRadius: '12px', // Border radius for the input
    boxShadow: 'none', // Remove box shadow from input to use container's shadow
    outline: 'none', // Remove default focus outline
  },
  inputContainerHover: {
    boxShadow: '0 0 10px rgba(0, 150, 136, 0.5)', // Enhanced shadow on hover
  },
};

export default SearchBar;