import { useParams, Link } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <section>
      <h1>Post #{id}</h1>
      <p>You are on Post with id {id}!</p>

      <p style={{ margin: 12 }}>
        <Link to="/post/2/erro">Go to next post</Link>
      </p>
    </section>
  );
}
