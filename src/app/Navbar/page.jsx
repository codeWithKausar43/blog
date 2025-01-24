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
    <div className="bg-gray-400 p-2">
      <div className=" container mx-auto flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">Blog</h2>
      </div>
      <div>
        <ul  className="flex gap-3">
        <li>
                <Link href="/">Home</Link>
             
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
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
    </div>
  );
};

export default Navbar;
