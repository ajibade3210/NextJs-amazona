import { useRouter } from "next/router";

const ProfileUser = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div className="">Hello {username}!</div>;
};

export default ProfileUser;
