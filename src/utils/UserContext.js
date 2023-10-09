import { createContext } from "react";

const UserContext = createContext({
  loggedinUser: "DefaultUser",
});
export default UserContext;
