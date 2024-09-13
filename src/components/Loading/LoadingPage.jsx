import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';
import { css } from '@emotion/react';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function LoadingPage() {
  let loading = true;
  let color = "#02C8E6";

  return (
    <div className="spinner-container">
      <PuffLoader color={color} loading={loading} css={override} size={100} />
    </div>
  );
}

export default LoadingPage;
