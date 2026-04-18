import { NavLink } from 'react-router'
import './Header.css'

export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        Bryan Chen's Resume
      </div>

      <div>
        <NavLink>
          <span className='donation-text'>Donation</span>
        </NavLink>

        <NavLink>
          <span>Test</span>
        </NavLink>
      </div>


    </div>
  );
}