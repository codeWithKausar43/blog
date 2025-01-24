import Link from "next/link";
import getAllPosts from "../../../fetch/getAllPosts";
import Button from "../components/Button";

export const metadata = {
  title: "Blogs",
  description: "This is a Home Blogs",
};
const Blogs = async () => {
  const posts = await getAllPosts();
 
  return (
    <div className="container mx-auto my-12">
      <div className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 grid gap-12 px-2 md:p-0 mx-auto">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="h-60 border shadow-xl p-10 flex flex-col justify-between">
              <h3 className="text-xl">{post.title}</h3>

              <div className="mt-4">
                <Link href={`/blogs/${post.id}`}>
                  <Button />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
