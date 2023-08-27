import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  //we dont need any information from the calling component we just have to check the online status
  //boolean value
  const [onlineStatus, setonlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
