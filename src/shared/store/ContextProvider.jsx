import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { USER_NAMES, VALID_INVITE_CODES } from "../utils/Constants";

const MyContext = createContext(null);

const MyProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (name, inviteCode) => {
    const newUser = {
      id: crypto.randomUUID(),
      name,
      inviteCode,
      timestamp: Date.now(),
      position: 0,
    };

    setUsers((currentUsers) => {
      const hasValidInvite =
        inviteCode && VALID_INVITE_CODES.includes(inviteCode);
      let newUsers = [...currentUsers];

      if (hasValidInvite) {
        const lastInvitedIndex = newUsers.findLastIndex(
          (user) =>
            user.inviteCode && VALID_INVITE_CODES.includes(user.inviteCode),
        );
        newUsers.splice(lastInvitedIndex + 1, 0, newUser);
      } else {
        newUsers.push(newUser);
      }

      return newUsers.map((user, index) => ({
        ...user,
        position: index + 1,
      }));
    });
  };

  // Simulate real-time user registration updates
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNames = USER_NAMES;
      const shouldAddInvite = Math.random() > 0.7;
      const randomName =
        randomNames[Math.floor(Math.random() * randomNames.length)];
      const randomInvite = shouldAddInvite
        ? VALID_INVITE_CODES[
            Math.floor(Math.random() * VALID_INVITE_CODES.length)
          ]
        : null;

      addUser(randomName, randomInvite);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MyContext.Provider value={{ users, addUser }}>
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node,
};

export { MyContext, MyProvider };

export function useWaitlist() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return context;
}
