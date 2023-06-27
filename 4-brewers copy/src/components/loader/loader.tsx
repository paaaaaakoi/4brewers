import React from "react";
import "./loader.scss";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#FEC12B", "#FF007D", "#246900", "#AB0000", "#849b87"]}
      />
    </div>
  );
};

export default Loader;
