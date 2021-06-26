import React from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({ color, loading, size }) => {
  return (
    <div className='puff-spinner'>
      <PuffLoader
        color={color || "#7ad1d1"}
        loading={loading}
        css={override}
        size={size || 100}
      />
    </div>
  );
};

export default Spinner;
