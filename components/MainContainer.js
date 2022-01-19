import Head from "next/head";
import { A } from "../components/A";

export const MainContainer = ({children, keywords}) => {

  return (
    <>
      <Head>
        <meta keywords={`next.js, next, nextjs, ${keywords}`}></meta>
      </Head>
      <div>
        <div className="navbar">
            <A href={"/"} text={'Home'} />
            <A href={"/users"} text={'Users'} />
        </div>
      </div>
      <style jsx>
        {`
          .navbar {
            background-color: blue;
            padding: 16px;
          }
        `}
      </style>
      <div>
        { children }
      </div>
    </>
  )
}