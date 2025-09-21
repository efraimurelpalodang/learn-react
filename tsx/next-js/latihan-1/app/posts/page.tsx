import styles from "@/app/about/aboutPage.module.css";
import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";
import { Iposts } from "../ts/types";

const base_url = "https://jsonplaceholder.typicode.com/posts";

export default async function About() {
  const respon = await fetch(base_url, {
    cache: "no-store"
  });
  const posts: Iposts[] = await respon.json()
  
  return (
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">Postingan Page</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        )
      })}
    </div>
  );
}
