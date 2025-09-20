import styles from "@/app/about/aboutPage.module.css";
import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

export default async function About() {
  const respon = await fetch(base_url);
  const post = await respon.json()
  console.log(post);
  
  return (
    <div>
      <h1 className="text-fuchsia-500">Postingan Page</h1>
      <p>{post[0].title}</p>
      <CardList>
        <h1>Hallo</h1>
        <p>Hi</p>
        <ViewUserButton/>
      </CardList>
    </div>
  );
}
