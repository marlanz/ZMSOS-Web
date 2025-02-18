import { useState, useEffect } from "react";
import axios from "axios";

const usePets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {}, []);
  return {};
};

export default usePets;
