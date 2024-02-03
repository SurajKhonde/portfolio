const ProgressBar = (props) => {
  const { bgcolor, completed,name } = props;

  const containerStyles = {
    height: 22,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 30
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    
    <div style={containerStyles}>
          <div style={fillerStyles} className="flex justify-between">
              <h3 className="text-center">{ name}</h3>
        <span style={labelStyles} classN>{ `${completed}%`}</span>
      </div>
  
    </div>
  );
};

export default ProgressBar;