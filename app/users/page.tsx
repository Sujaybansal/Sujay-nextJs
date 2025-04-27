import React from "react";
// interface User {
//   id: number;
//   name: string;
// }
export default async function Users() {
  console.log("Hello World");
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const users: User[] = await res.json();
  return (
    <>
      <h1>All User: </h1>
      {/* <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul> */}
    </>
  );
}
