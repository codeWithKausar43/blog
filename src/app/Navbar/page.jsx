import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="bg-gray-400 p-2 flex justify-between">
      <div>
        <h2>blog</h2>
      </div>
      <div>
        <ul  className="flex gap-2">
        <li>
                <Link href="/">Home</Link>
             
              </li>
              <li>
                <Link href="/Blogs">Blogs</Link>
              </li>
          {user ? (
            <>
              <li>
                <Link href="/Profile">Profile</Link>
              </li>
              <li>
                <LogoutLink>Log out</LogoutLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginLink>Login</LoginLink>
              </li>
              <li>
                <RegisterLink>Resister</RegisterLink>
              </li> 
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
