import React, { useEffect, useState } from "react";
import { Layout } from "../layout";
import { getProfile } from "../../api";

export const Settings = () => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    (async function() {
      const data = await getProfile();
      setProfile(data);
    })();
  });

  return (
    <Layout>
      <div>{profile && profile.name}</div>
      <div>{profile && profile.email}</div>
    </Layout>
  );
};
