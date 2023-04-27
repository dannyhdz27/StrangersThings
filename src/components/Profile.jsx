import useAuth from "../hooks/useAuth";
import { fetchMe } from "../API/api";
import { useEffect, useState } from "react";

export const Profile = () => {
  const { token } = useAuth();

  const [name, setName] = useState([]);
  useEffect(() => {
    async function displayName() {
      const result = await fetchMe();
      setName(result.data.username);
    }
    displayName();
  }, []);
  {
    name.map((names) => {
      return (
        <div>
          <h2>PROFILE</h2>
          <h1>Hello {name.data.username}</h1>
        </div>
      );
    });
  }
};
