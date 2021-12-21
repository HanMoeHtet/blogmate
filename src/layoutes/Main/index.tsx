import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/icons/Logo';

interface MainProps {}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div className="min-h-screen p-12 bg-gray-50">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-700">
          <Link to="/">
            <Logo className="h-20 w-auto mx-auto text-purple-700 mb-4" />
            <span>Blog Mate</span>
          </Link>
        </h1>
      </header>
      <main className="w-1/2 max-w-32 mx-auto">{children}</main>
    </div>
  );
};

export default Main;
