import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import { useCallback, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [data, setData] = useState("");
  const trpc = api.useContext();
  const event = api.subscribe.add.useMutation();

  const getItem = useCallback(async () => {
    const ret = await trpc.subscribe.onAdd.fetch();
    setData(ret);
    void getItem();
  }, [trpc, setData]);

  useEffect(() => {
    void getItem();
  }, [getItem]);

  const onSend = () => {
    event.mutate();
  };

  return (
    <>
      <Head>
        <title>test trpc long polling</title>
      </Head>
      <main>
        {data}
        <button onClick={onSend}>test</button>
      </main>
    </>
  );
};

export default Home;
