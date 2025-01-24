import getPost from "../../../../fetch/getPost";
export const metadata = {
  title: "Details",
  description: "This is a Details page",
};
const Blog = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  console.log(post)
  return (
    <div className="container rounded-md mx-auto mt-12 border p-6  md:p-12 shadow-xl">
      <h4 className="text-2xl font-bold">Number : {id}</h4>
      <h3 className="text-xl font-bold mt-2">Title : {post.title}</h3>
      <h3 className="mt-3"> Description : {post.body}</h3>
    </div>
  );
};
export default Blog;
