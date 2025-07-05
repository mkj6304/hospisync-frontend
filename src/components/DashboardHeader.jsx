import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const username = currentUser?.username || 'Unknown';
  const role = currentUser?.role || 'User';

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <header className="dashboard-header">
      <div className="user-info">
        <strong>{role.toUpperCase()}:</strong> {username}
      </div>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </header>
  );
};

export default DashboardHeader;

