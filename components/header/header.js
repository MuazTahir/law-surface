// import { Link } from 'react-router-dom';
'use client';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut, setUser } from '../../store/auth';
import Link from 'next/link';

export default function Header() {
  let dispatch = useDispatch();
  let user = useSelector((store) => store.authSlice.currentUser);

  return (
    <div>
      {!user._id && (
        <nav className="navbar   navbar-light bg-light">
          <div className="navbar">
            <Link
              className="navbar-brand"
              href="/dashboard"
              style={{
                backgroundImage: 'url("/images/logo.png")'
              }}
            ></Link>
            {user._id && (
              <span>
                {' '}
                Welcome , <b>{user.fullName}</b>{' '}
              </span>
            )}
          </div>

          {/* <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button> */}
          <div
            className=" "
            id="navbarSupportedContent"
          >
            <div className="  d-flex gap-4  ml-auto">
              <div className="nav-item">
                <Link
                  onClick={() => {
                    dispatch(setUser({}));
                  }}
                  className="nav-link"
                  href="/features"
                >
                  Features
                </Link>
              </div>
              {!user._id && (
                <div className="nav-item">
                  <Link
                    className="nav-link"
                    href="/access"
                  >
                    Login
                  </Link>
                </div>
              )}
              {user._id && (
                <div className="nav-item">
                  <Link
                    onClick={() => {
                      dispatch(setUser((_id = '')));
                    }}
                    className="nav-link"
                    href="/access"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
