import React from 'react';
import { Container, Table } from 'react-bootstrap';
import TableLibrary from '../table/TableLibrary';
import Loading from '../loading/Loading';

export default function Home({ data, load, title }) {
  return (
    <Container>
      <div className='d-flex justify-content-center align-items-center gap-4'>
        <h1>
          {title}
        </h1>
        {load && <Loading />}
      </div>
      <TableLibrary data={data} />
    </Container>
  );
}
