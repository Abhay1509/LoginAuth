import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user } = useAuth0();

  return (
    <>
      <JSONPretty data={user} />
      {/* {JSON.stringify(user, null, 2)} */}
    </>
  );
};

export default Profile;
