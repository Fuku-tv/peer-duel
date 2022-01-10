import { css } from '@emotion/css';
import { VideoFeed } from 'components/VideoFeed';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>Peer Duel</title>
        <meta name="description" content="Peers duel to impress us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoFeed label="Player 1"></VideoFeed>
    </div>
  );
};

export default Home;
