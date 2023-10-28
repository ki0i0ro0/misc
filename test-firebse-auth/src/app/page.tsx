import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

const Home = async () => {
  return (
    <main>
      <p>クライアント</p>
      <ClientComponent />
      <p>サーバー</p>
      <ServerComponent />
    </main>
  );
};

export default Home;
