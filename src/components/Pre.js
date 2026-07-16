import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="preloader-inner">
        <div className="preloader-name">Zixin Chen</div>
        <div className="preloader-bar">
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Pre;
