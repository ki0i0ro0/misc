import React from "react";

const index = ({ data }: any) => {
  return (
    <div>
      {data.map((person: any) => {
        return <div key={person.name}>{person.name}</div>;
      })}
    </div>
  );
};

export default index;

export const getServerSideProps = async () => {
  const res = await fetch("https://swapi.py4e.com/api/people/");
  console.warn(res);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data: data.results,
    },
  };
};
