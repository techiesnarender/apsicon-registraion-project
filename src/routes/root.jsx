import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          {/* <h1>React Router Contacts</h1> */}
          <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
          <nav>
            <ul>
              <li>
              <Link to={`register`}>Registration Details</Link>
              </li>
              <li>
              <Link to={`contacts`}>Conference Registration</Link>
              </li>
              <li>
              <Link to={`contacts`}>Accompanying Registration</Link>
              </li>
              <li>
              <Link to={`contacts`}>Accompanying Person List</Link>
              </li>
              <li>
              <Link to={`contacts`}>Add Master Class</Link>
              </li>
              <li>
              <Link to={`contacts`}>Guidelines For Abstract</Link>
              </li>
              <li>
              <Link to={`contacts`}>Abstract List</Link>
              </li>
              <li>
              <Link to={`contacts`}>Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }