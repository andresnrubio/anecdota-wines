import React from 'react';

const WineDescription = ({ detail }) => {
  return (
    <div>
      <h2>DESCRIPCIÓN</h2>
      <p style={{ fontWeight: '300', fontSize: '11px', lineHeight: '13px' }}>
        {detail ? detail.description : null}
      </p>
    </div>
  );
};

export default WineDescription;
