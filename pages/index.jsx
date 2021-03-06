import Head from "next/head";
import UploadModal from "../components/UploadModa";
import Feed from "/components/Feed";
import Header from "/components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>IG CLONE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* HEADER */}
        <Header />
        {/* FEED */}
        <Feed />
        {/* MODAL */}
        <UploadModal />
      </main>
    </div>
  );
}
