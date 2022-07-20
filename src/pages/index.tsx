import type { NextPage } from "next";
import { useRef } from "react";
import Head from "next/head";
import Canvas from "../Canvas";

export default function Home(){
  

  return (
    <>
      <Head>
        <title>Canvas Demo</title>
      </Head>      

      <Canvas />
    </>
  )



}
