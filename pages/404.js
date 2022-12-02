import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="container">
      <h1>Oops! Page Not Found</h1>
      <Link href="/">Go To Home Page</Link>

      <style jsx>
            {`
                .container {
                    max-width:1200px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    padding:100px 50px;
                    text-align:center;
                }
            `}
        </style>
    </div>
  );
};

export default PageNotFound;
