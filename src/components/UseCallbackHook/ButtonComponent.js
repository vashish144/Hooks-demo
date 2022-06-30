import React from 'react'

const ButtonComponent = ({increaseData,children}) => {
 console.log("render with---",children);
  return (
   <button onClick={increaseData}>{children}</button>
  )
}

export default React.memo(ButtonComponent);
// export default  ButtonComponent;