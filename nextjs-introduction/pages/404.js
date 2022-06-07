import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h3>Check to see if you are in correct page.</h3>
      <Link href="/">Click Here to go Home</Link>
    </div>
  );
};

export default PageNotFound;
