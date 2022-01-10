import { css } from '@emotion/css';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const flexCenter = css`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DefaultLayout = (props: Props) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: center;
      `}
    >
      <header className={flexCenter}>
        <h1>Peer Duel</h1>
      </header>
      <main>{props.children}</main>
      <footer className={flexCenter}>
        <code>copyright &copy; {new Date().getFullYear()} Good Fortune Games</code>
      </footer>
    </div>
  );
};
