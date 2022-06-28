import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes.interface';

export const Users = () => {

  const { users, nextPageUsers, prevPageUsers } = useUsers();

  const renderItem = ({ avatar, first_name, email, id, last_name }: User) => {
    return (
      <tr key={id}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{email}</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Users:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody >
          {
            users.map(user => (
              renderItem(user)
            ))
          }
        </tbody>
      </table>

      <div className='d-flex justify-content-between'>
        <button
          className='btn btn-danger'
          onClick={prevPageUsers}
        >
          &#x3C;
        </button>

        <button
          className='btn btn-primary'
          onClick={nextPageUsers}
        >
          &#x3E;
        </button>
      </div>
    </>
  )
}
