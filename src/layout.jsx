const headerStyles = {
  color: 'white'
};
const styles = {
  backgroundColor: 'red'
};

const ViewLayer = props => (
  <div>
    <h2 style={headerStyles}>Hello</h2>
    <h2 style={headerStyles}>{props.name} !</h2>
  </div>
);

const ParentLayer = () => (
  <div style={styles}>
    <ViewLayer />
  </div>
);
export default ParentLayer;
