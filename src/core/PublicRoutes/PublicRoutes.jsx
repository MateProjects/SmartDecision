import { Navigate } from 'react-router'
import { privatePaths } from '../../config/routes/routes'

const PublicRoute = ({ children }) => {
  if (localStorage.getItem('access_token') && localStorage.getItem('role')) {
    const role = localStorage.getItem('role')
    return (
      <Navigate
        to={privatePaths[role][Object.keys(privatePaths[role])[0]]}
        replace
      />
    )
  }

  return children
}

export default PublicRoute
