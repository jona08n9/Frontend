import Image from "next/image";
import Head from "next/head";

export default function Dog({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h1>{data.content.heading}</h1>
      <p>{data.content.text}</p>
      <Image src={data.content.image.src} alt={data.content.image.alt} width={data.content.image.width} height={data.content.image.height} sizes="(max-width: 750px) 100vw, 750px" />
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context.params.slug);
  const slug = context.params.slug;
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs/" + slug;
  //   const data = await fetch(api).then((res) => res.json());
  const res = await fetch(api);
  if (res.status != 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  const api = "https://bucolic-bombolone-857476.netlify.app/api/dogs";
  const res = await fetch(api);
  const data = await res.json();

  const paths = data.map((object) => {
    return { params: { slug: object.slug } };
  });
  return {
    paths,
    fallback: false,
  };
}
