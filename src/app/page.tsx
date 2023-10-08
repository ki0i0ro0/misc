import Link from "next/link";
import axios from "axios";
import Image from "next/image";
const axiosClient = axios.create({
  baseURL: "https://ki0i0ro0.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "e882cb286ca1422c8ebdbd594b43d5fd3515",
  },
});
interface Props {
  blogs: any[];
}

export default function Home(props: Props) {
  const { blogs } = props;
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.message}</a>
            </Link>
            <img src={blog.image.url} alt={blog.id}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await axiosClient.get("/pets");

  return {
    props: {
      blogs: data.data.contents,
    },
  };
};
