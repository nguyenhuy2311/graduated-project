import Link from "next/link";
import Image from "next/image"; // Import Image component for the logo

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link href="/" className="navbar-brand">
          <Image
            src="" // Replace with the actual path to your logo
            alt="Logo"
            width={50} // Adjust the width as needed
            height={50} // Adjust the height as needed
          />
        </Link>

        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCenteredExample"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                Find a property
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/link" className="nav-link">
                Share Stories
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                aria-expanded="false"
                data-mdb-dropdown-init
              >
                Rental Guides
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/action" className="dropdown-item">
                    Action
                  </Link>
                </li>
                <li>
                  <Link href="/another-action" className="dropdown-item">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link href="/something-else" className="dropdown-item">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <span className="nav-link">Disabled</span>
            </li>
          </ul>
        </div>

        {/* User icon on the right */}
      </div>
    </nav>
  );
};

export default Navbar;
