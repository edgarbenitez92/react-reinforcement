import React, { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqRespList, User } from '../interfaces/reqRes.interface';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const { data } = await reqResApi.get<ReqRespList>('/users', {
      params: {
        page: pageRef.current
      }
    });


    if (data.data.length > 0) {
      setUsers(data.data);
    } else {
      pageRef.current--;
      alert('No hay mas registros');
    }
  }

  const nextPageUsers = () => {
    pageRef.current++
    getUsers();
  }

  const prevPageUsers = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      getUsers()
    }
  }

  return { users, nextPageUsers, prevPageUsers };
}
