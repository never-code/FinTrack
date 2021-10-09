import React from 'react';
import Table from '../Table';
import ErrorBoundary from '../../HOC/ErrorBoubdray';

const BreakUp = ({ data, title }) => (
  <div className="table">
    <div className="title">
      <h2 className="background double">
        <span> {title} </span>
      </h2>
    </div>
    <ErrorBoundary title="Breakup Table">
      <Table
        data={data}
      />
    </ErrorBoundary>
  </div>
);
export default BreakUp;
