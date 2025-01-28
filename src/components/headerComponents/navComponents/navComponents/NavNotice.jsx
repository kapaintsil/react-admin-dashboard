function NavNotice() {
  return (
    <li className="nav-item dropdown">
      <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown" title="Notifications">
        <i className="bi bi-bell"></i>
        <span className="badge bg-danger badge-number">4</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
        <li className="dropdown-header">
          You have 4 new notifications
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li className="notification-item">
          <i className="bi bi-exclamation-circle text-warning"></i>
          <div>
            <h4>You’re Doing Great! 🌟</h4>
            <p>Don’t forget to take a moment for yourself today. You’ve earned it! 😊</p>
            <p>30 mins. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-x-circle text-danger"></i>
          <div>
            <h4>Time to Shine! ✨</h4>
            <p>Keep going—you’re doing amazing! 🌟</p>
            <p>1 hr. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-check-circle text-success"></i>
          <div>
            <h4>Quick Check-In! 👋</h4>
            <p>Take a breath and tackle the day. You’ve got this! 💪</p>
            <p>2 hrs. ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="notification-item">
          <i className="bi bi-info-circle text-primary"></i>
          <div>
            <h4>Don’t Miss Out! 🚀</h4>
            <p>Opportunities are waiting. Take the first step! 🌈</p>
          </div>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="dropdown-footer">
          <i className=""></i>
          <a href="#">Show all notifications</a>
        </li>
      </ul>
    </li>
  );
}

export default NavNotice;
