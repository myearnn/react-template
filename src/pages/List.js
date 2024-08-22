
import { useEffect, useState } from 'react';
import {BrowserRouter, Router, Route, Link, json} from 'react-router-dom'

const List = () => {
  const [hasError, setHasError] = useState(false)
  const [users, setUsers] = useState({})

  async function fetchData() {
    const res = await fetch('https://randomuser.me/api/')
    res
    .json()
    .then(res => setUsers(res))
    .catch(err=>setHasError(err))
  }

  useEffect(() => {
    fetchData()
  })
  
  return (
    <div className="list">
        <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default List;
