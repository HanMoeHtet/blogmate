import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: React.ComponentProps<typeof Link>['to'];
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-4 rounded hover:text-purple-700"
    >
      {children}
    </Link>
  );
};

export default NavLink;
