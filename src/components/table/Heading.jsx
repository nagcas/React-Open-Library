import React from 'react';

export default function Heading({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <thead>
      <tr>
        {Object.keys(data[0]).map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
    </thead>
  );
}
