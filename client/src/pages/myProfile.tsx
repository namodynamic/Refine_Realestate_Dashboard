import { useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "components";


const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const userId = (user as { userid?: string })?.userid;
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: userId,
  });

  console.log("user?.userid:", userId);
  console.log("data:", data);

  const myProfile = data?.data ?? {};

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
