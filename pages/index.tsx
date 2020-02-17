import React from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home: React.FC = () => (
  <div>
    <Head>
      <title>araj blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">araj</h1>
    </div>

    <ul className="accounts">
      <li>
        <a href="https://github.com/rascate">github</a>
      </li>
      <li>
        <a href="mailto:ja.create@gmail.com">email</a>
      </li>
      <li>
        <a href="https://qiita.com/araj">qiita</a>
      </li>
    </ul>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .accounts {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </div>
);

export default Home;
