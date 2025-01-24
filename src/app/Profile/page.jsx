import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32"></div>
        <div className="relative -mt-16 flex justify-center">
          <img
            className="h-32 w-32 rounded-full border-4 border-white object-cover"
            src={`https://ui-avatars.com/api/?name=${user?.given_name}+${user?.family_name}`}
            alt="User Avatar"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome</h2>
          <h1 className="text-2xl font-semibold text-gray-800">
            {user?.given_name} {user?.family_name}
          </h1>
          <p className="text-gray-600"></p>
          
        </div>
        <div className="p-4">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg">
            Edit Profile
          </button>
        </div>
        <div className="p-4 border-t">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">Details</h2>
          <ul className="text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Email:</span> {user?.email}
            </li>
             
            <li>
              <span className="font-medium">Joined:</span> January 2025
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
