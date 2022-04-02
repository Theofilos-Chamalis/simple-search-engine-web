import { FunctionComponent } from 'react';
import { AppShell } from '@mantine/core';
import MainHeader from './MainHeader';

interface MainContainerProps {}

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
