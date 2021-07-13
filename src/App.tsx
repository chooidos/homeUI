import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems } from './oh-items-module/slice';


function App() {

  const items = useSelector((state:any)=>state.persistent.items);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllItems());

  },[]); //eslint-disable-line

  return (
    <div className="App">
      {items.map((item:any) => <div key={item.name}>{item.name}</div> )}
    </div>
  );
}

export default App;
