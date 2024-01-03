import Image from "next/image";

export default function PostHeader(props: { image: string }) {
  const { image } = props;
  return (
    <header>
      <Image src={image} alt="Title Image" width={200} height={150} />
    </header>
  );
}
