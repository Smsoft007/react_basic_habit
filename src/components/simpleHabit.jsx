import React, { useState , useRef, useCallback , useEffect } from 'react';

const SimpleHabit = () => {
  //state hook 대신 사용 
  const [count, setCount] = useState(0);
  //const spanRef = React.createRef();
  const spanRef = useRef(); // 메모리에 저장 하고 사용 
  //useCallback 주위해야할 부분이 있다. 
  const handleIncrement = useCallback(() => {
    setCount( count+1);
  });
  // */useEffect */
  // component 가 처음 moundtd 되었을때 , 
  // update 될때 마다 호출 된다. 
  useEffect(() => {
    console.log(`mounted & update!:  ${count}`);
  }, [count]); // 두번째인자에(count) 변경 될때마다. useEffect가 호출된다. 
                // 여러가지 [count, name ] // 여러개의 것들의 변경을 감시할수있다. 
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fa fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

