const PercentageChange = ({ value }) => {
    const isPositive = value >= 0;
    return (
      <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
        {isPositive ? '▲' : '▼'} {Math.abs(value).toFixed(2)}%
      </span>
    );
  };
  
  export default PercentageChange;
  