import React, { useState, useEffect } from 'react';
import colleges from './data'

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [listItems2, setListItems2] = useState(colleges.slice(0,10));
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems2(prevState => ([...prevState, ...colleges.slice(prevState.length + 1, 10)]));
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <ul className="list-group mb-2">
        {listItems2.map(listItem => <li className="list-group-item">{listItem.college_name}</li>)}
      </ul>
      {isFetching && 'Fetching more list items...'}
    </>
  );
};

export default List;