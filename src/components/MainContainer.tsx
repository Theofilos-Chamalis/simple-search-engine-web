import { FunctionComponent } from 'react';
import { AppShell } from '@mantine/core';
import MainHeader from './MainHeader';

interface MainContainerProps {}

/**
 * A wrapper component of the FE application's main content. It is used
 * to render the MainHeader component and apply a base theme to the components
 * used in the main content.
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined} children
 * @returns {JSX.Element}
 * @constructor
 */
const MainContainer: FunctionComponent<MainContainerProps> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      fixed
      header={<MainHeader />}
      styles={theme => ({
        main: {
          backgroundColor: theme.colors.gray[1],
        },
      })}>
      {children}
    </AppShell>
  );
};

export default MainContainer;
