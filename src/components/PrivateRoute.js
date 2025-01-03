import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo }) => {
  // Тут можна використовувати свою логіку перевірки аутентифікації
  const isAuthenticated = Boolean(localStorage.getItem('token')); // Це лише приклад, перевірка може бути іншою

  return isAuthenticated ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
