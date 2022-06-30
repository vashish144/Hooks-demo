import React from 'react'

const CountComponent = ({count}) => {
 console.log("render form Count Component");
  return (
    <div>Count:{count}</div>
  )
}

export default React.memo(CountComponent);
// export default  CountComponent;