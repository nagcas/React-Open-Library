import React from 'react';
import Heading from './Heading';
import Row from './Row';

export default function TableLibrary({ data }) {
  return (
    <>
      <table className='table table-bordered'>
        <Heading data={data} />
        <Row data={data} />
      </table>
    </>
  );
}
