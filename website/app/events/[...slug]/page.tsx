export default function EventDetails({
  params,
}: {
  params: { slug: string[] };
}) {
  return <h1>This is the event details, the slug is {params.slug}</h1>;
}
