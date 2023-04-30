import Head from "next/head";
import React from "react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { GithubIcon } from "@/components/Icon";
import { motion } from "framer-motion";
const FramerImage = motion(Image);
const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border-solid border-dark border-2 bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 rounded-br-3xl -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          priority
          sizes="(max-width:768px) 100vw , (max-width:1200px) 50vw,50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light ">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 rounded-br-3xl -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        <div className="mt-2 w-full  flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline underline-offset-2"
          >
            Visit
          </Link>
          <Link href={github} className="w-8" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>YA | Projects Page</title>
        <meta name="description" content="it is me youssef askar" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className=" mb-16 "
            text="Imagination Trumps Knowlage!"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeatureProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Feature Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Feature Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Feature Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Feature Projects"
                img={project1}
                github="/"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Feature Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                type="Feature Projects"
                img={project1}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
