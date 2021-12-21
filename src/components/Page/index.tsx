import * as React from 'react';
import { endLoading, startLoading } from '../../services/page';

interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
  React.useEffect(() => {
    endLoading();
    return () => startLoading();
  }, []);
  return <>{children}</>;
};

export default Page;
