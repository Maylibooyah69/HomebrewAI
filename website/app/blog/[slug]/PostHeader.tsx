import Image from "next/image";

export default function PostHeader(props: { title: string; image: string }) {
  const { title, image } = props;
  return (
    <header>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}
