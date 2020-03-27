import React from 'react';

const headerStyles = {
  color: '#a7a7a7'
};
const styles = {
  backgroundColor: '#00BFFF'
};

const ViewLayer = props => (
  <div>
    <h2 style={headerStyles}>Hello</h2>
    <h2 style={headerStyles}>{props.name} !</h2>
  </div>
);

const ParentLayer = props => (
  <div style={styles}>
    <ViewLayer name={props.name} />
  </div>
);
export default ParentLayer;
