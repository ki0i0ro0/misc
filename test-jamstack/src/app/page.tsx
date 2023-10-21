import Link from "next/link";

export default async function Home() {
  const data = await fetch(`https://ki0i0ro0.microcms.io/api/v1/pets`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.API_KEY ?? "",
    },
    cache: "force-cache",
  });

  const blogs: any[] = (await data.json()).contents;

  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <p>{blog.message}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
