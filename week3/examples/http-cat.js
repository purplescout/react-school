import React from "react";
import sample from "lodash/sample";

import httpCodes from "./http-codes";

class HttpCat extends React.Component {
  randomCat = () => {
    const httpCode = sample(httpCodes);
    this.setState({ img: `//http.cat/${httpCode}` });
  };
  render() {
    return (
      <div>
        {this.state.src && <img src={this.state.src} />}
        <button onClick={this.randomCat}>cat me another one</button>
      </div>
    );
  }
}

export default HttpCat;
