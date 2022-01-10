import { css } from '@emotion/css';
import React from 'react';
import Webcam from 'react-webcam';
import Img from 'next/image';

interface Props {
  label: string;
}

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

export const VideoFeed = (props: Props) => {
  const webcamRef = React.useRef<Webcam>(null);

  const [errorMessage, setErrorMessage] = React.useState('');
  const [imageSource, setImageSource] = React.useState('');

  const capture = () => {
    setImageSource(webcamRef.current?.getScreenshot() || '');
    console.log(webcamRef);
    console.log(imageSource);
  };
  return errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    <div>
      <h1>{props.label}</h1>
      <Webcam
        audio={true}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        onUserMediaError={(err: any) => {
          setErrorMessage(err.message);
        }}
      />
      <button onClick={capture}>Take Picture</button>
      {imageSource && <Img src={imageSource} />}
    </div>
  );
};
