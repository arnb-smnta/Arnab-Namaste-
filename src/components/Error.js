import { useRouteError } from "react-router-dom";

const Error = () => {
  return (
    <div>
      {useRouteError().status}:{useRouteError().statusText}
    </div>
  );
};

export default Error;
