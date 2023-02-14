import React from "react";

const index = ({ item }: any) => {
  console.log(item);
  return <div>{item}</div>;
};

export default index;

export const getServerSideProps = async (context: any) => {
  //以下のconsole.logはブラウザで実行されない
  console.log("hello next.js");
  console.log(context.query);
  return {
    props: {
      item: "hello world",
    },
  };
};
