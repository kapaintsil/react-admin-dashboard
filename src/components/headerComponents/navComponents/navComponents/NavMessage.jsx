
function NavMessage() {
  return (
    <li className="nav-item dropdown">
      <a
        href="#"
        className="nav-link nav-icon"
        data-bs-toggle="dropdown"
        title="Messages"
      >
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-success badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="/images/image1.jpg"
              alt="profile picture"
              className="rounded-circle"
            />
            <div>
              <h4>Elena Martinez</h4>
              <p>Hey! Just wanted to check in and see how you&apos;re doing. Let me know if you need anything. 😊
              </p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="/images/image2.jpg"
              alt="profile picture"
              className="rounded-circle"
            />
            <div>
              <h4>Kwame Asante</h4>
              <p>Hey! Keep pushing forward, you’re doing great! Medaase for being awesome! 🙌✨
              </p>
              <p>5 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="message-item">
          <a href="#">
            <img
              src="/images/image3.png"
              alt="profile picture"
              className="rounded-circle"
            />
            <div>
              <h4>Ama Mensah</h4>
              <p>Hey Ama! Just a quick reminder to shine bright today, you’ve got this! Medaase for being you! 🌟
              </p>
              <p>5 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li className="dropdown-footer">
          <i className=""></i>
          <a href="#">Show all messages</a>
        </li>
      </ul>
    </li>
  )
}

export default NavMessage;