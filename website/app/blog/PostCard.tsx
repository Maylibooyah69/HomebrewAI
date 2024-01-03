import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
  summary: string;
  slug: string;
};

const PostCard: React.FC<Post> = ({
  id,
  title,
  content,
  summary,
  image,
  slug,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
        <CardActionArea className="">
          <CardMedia>
            <Image
              src={`/images/blog-posts/${slug}/${image}`}
              alt="preview image"
              width={345}
              height={200}
              layout="responsive"
            />
            {/* <Image src={image} alt="preview image" width={345} height={200} /> */}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PostCard;
