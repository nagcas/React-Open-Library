import React from 'react';

export default function Row({ data }) {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {Object.values(item).map((value, idx) => (
            <td key={idx}>{value}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
