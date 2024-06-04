import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

// controls the display of the fetched name nationality

export default function DisplayNationality({ nationality }) {
  const [loading, setLoading] = useState(true); // State to control whether to show the spinner or the nationality

  // Set a timer to change the loading state after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []); // runs only once 

  if (loading) {
    return (
      <Spinner animation="grow" variant="light" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <h2 className="nationality">
      Your Most Likely Nationality is <br /> {nationality}
    </h2>
  );
}