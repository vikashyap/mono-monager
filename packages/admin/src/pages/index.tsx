import React from "react";
import { Button } from "shared";
import Router from "next/router";

const Index = () => {
  const handleClick = () => {
    Router.push("/next-page");
  };
  return (
    <div className="titleWrapper nnnn">
      <div className="textStyle">Welcome to Admin admin change</div>

      <Button onClick={handleClick} buttonType="next">
        Next page
      </Button>
      <style jsx>
        {`
          .titleWrapper {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 200px;
          }
          .textStyle {
            font-size: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
