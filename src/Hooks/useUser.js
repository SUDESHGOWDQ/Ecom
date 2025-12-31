import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function useUser() {
  const { user, login, logout } = useContext(UserContext);
  return { user, login, logout };
}
