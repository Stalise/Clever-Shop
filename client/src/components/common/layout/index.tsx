import {FC} from 'react';

interface IProps {
  children: React.ReactNode;
}

export const Layout: FC<IProps> = ({children}) => (
  <>
    <main>{children}</main>
  </>
);
