import * as React from 'react';
import GoBack from '../icons/GoBack';
import NavLink from '../NavLink';

interface GoPrevLinkProps {
  to: React.ComponentProps<typeof NavLink>['to'];
}

const GoPrevLink: React.FC<GoPrevLinkProps> = ({ to }) => {
  return (
    <NavLink to={to}>
      <GoBack className="mr-3 w-4" />
      <span className="">Prev</span>
    </NavLink>
  );
};

export default GoPrevLink;
