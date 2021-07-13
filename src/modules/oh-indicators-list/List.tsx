import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllItems, selectItems, selectErrorMessage } from './store';

export const List = () => {
  const items = useSelector(selectItems);
  const error = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  }, []);

  return (
    <div className="App">
      {error}
      <ul>
        {items.map(item => <li key={item.name}>{item.name}</li> )}
      </ul>
    </div>
  );
}
