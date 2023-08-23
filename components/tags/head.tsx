import React from "react"
import Head from "next/head"

type Head = {
  title: string
  content: string
}

export default function HeadTag({ title, content }: Head) {
  return (
    <>
      <Head>
        <title>{title} - Premier league</title>
        <meta
          name='description'
          content={`${content} premier league anglaise`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}
