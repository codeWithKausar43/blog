export default async function getAllPosts ( ) {
   const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
   return result.json();
}