import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL } from "./constants";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  // Initialize token and user from localStorage
  const [token, setToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLogged, setIsLogged] = useState(!!user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = async () => {
    if (token && !user) {
      setLoading(true);
      await loadUserAfterRefresh();
      setLoading(false);
    }
  };

  const loadUserAfterRefresh = async () => {
    try {
      const userData = await getLoggedUser(token);
      if (userData) {
        setUser(userData); // Cập nhật state user
        localStorage.setItem("user", JSON.stringify(userData)); // Đồng bộ localStorage
        setIsLogged(true);
        console.log(userData);
      } else {
        setIsLogged(false);
        localStorage.removeItem("user"); // Xóa user nếu không có
      }
    } catch (err) {
      console.log("Failed to load user: ", err.message);
      setIsLogged(false);
    }
  };

  const getLoggedUser = async (accessToken) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/Admin/GetCurrentLoginUser`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      console.log("user info after refresh: ", response.data);
    } catch (err) {
      console.log("Error fetching user: ", err);
    }
    return null;
  };

  const login = async (body) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/Auth/Login`, body);
      if (response.status >= 200 && response.status < 300) {
        const { token } = response.data;
        localStorage.setItem("accessToken", token);
        setToken(token);
        const userData = await getLoggedUser(token);
        if (userData) {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          setIsLogged(true);
          return userData;
        }
      }
      console.log(response.data);
    } catch (err) {
      console.log("Login error: ", err);
      if (err.code === "ERR_NETWORK") {
        return { error: "Network Error: Unable to connect to the server" };
      }
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    setIsLogged(false);
    setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        setIsLogged,
        token,
        setToken,
        getLoggedUser,
        login,
        logout,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Define prop-types for the component
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
