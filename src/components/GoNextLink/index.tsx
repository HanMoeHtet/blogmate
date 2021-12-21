import * as React from 'react';
import GoNext from '../icons/GoNext';
import NavLink from '../NavLink';

interface GoNextLinkProps {
  to: React.ComponentProps<typeof NavLink>['to'];
}

const GoNextLink: React.FC<GoNextLinkProps> = ({ to }) => {
  return (
    <NavLink to={to}>
      <span className="mr-3">Next</span>
      <GoNext className="w-4" />
    </NavLink>
  );
};

export default GoNextLink;
