import React from 'react'

const TitleComponent = () => {
 console.log("titleComponent Called");
  return (
    <div>useCallBack - Hook</div>
  )
}

export default React.memo(TitleComponent);
// export default  TitleComponent;