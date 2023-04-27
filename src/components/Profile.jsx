import useAuth from "../hooks/useAuth";
import { fetchMe } from "../API/api";
import { useEffect, useState } from "react";

export const Profile = () => {
  const { token } = useAuth();

  const [name, setName] = useState("");
  useEffect(() => {
    async function displayName() {
      const result = await fetchMe(token);
      setName(result.data.username);
    }
    displayName();
  }, []);

  return (
    <div>
      <h2>PROFILE</h2>
      <h1>Hello {name}</h1>
    </div>
  );
};
