import Link from "next/link";
import getAllPosts from "../../fetch/getAllPosts";
import Blogs from "./blogs/page";
import Button from "./components/Button";

const Home = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      <main className=" container mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 grid gap-12 px-2 md:p-0 mx-auto">
        {posts.slice(0, 8).map((post) => (
          <div key={post.id}>
            <div className="h-60 border shadow-xl p-10 flex flex-col justify-between">
              <h3 className="text-xl">{post.title}</h3>

              <div className="mt-4">
                <Link href={`/Blogs/${post.id}`}>
                  <Button />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
