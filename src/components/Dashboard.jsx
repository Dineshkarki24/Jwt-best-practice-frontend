import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UseAuthContext } from '../hooks/useStoreToken';

export default function Dashboard() {
    const users = useContext(UseAuthContext);
  console.log(users)
  if (!users) {
    return  <Redirect to='/login' />
  }
    return <h6>Dashnoard</h6>
}