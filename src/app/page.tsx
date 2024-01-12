// import { FC } from "react";
// import Button from "../components/ui/Button";

// interface pageProps {}

// const page: FC<pageProps> = ({}) => {
//   return <Button>Hello</Button>;
// };

// export default page;

import { db } from "@/lib/db";

export default async function Home() {
  return <div className="text-red-500">Hello World !</div>;
}
