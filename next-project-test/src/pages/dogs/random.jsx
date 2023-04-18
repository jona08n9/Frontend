export default function RandomDog({ imgUrl }) {
  console.log(imgUrl);
  return (
    <>
      <h1>Random Dog</h1>
      <img src={imgUrl} alt="Random dog" />
    </>
  );
}

export async function getServerSideProps() {
  const api = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      imgUrl: data.message,
    },
  };
}
