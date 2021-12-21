import * as React from 'react';
import GoBack from '../icons/GoBack';
import { useNavigate } from 'react-router-dom';

interface GoToHomeLinkProps {}

const GoToHomeLink: React.FC<GoToHomeLinkProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className="flex items-center p-4 rounded hover:text-purple-700"
      onClick={handleClick}
    >
      <GoBack className="mr-3 w-4" />
      <span className="">Home</span>
    </button>
  );
};

export default GoToHomeLink;
