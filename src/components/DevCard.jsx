import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DevCard({ url, title, description }) {
  return (
    <Card className="mx-5 mt-10 " sx={{ maxWidth: 345 }}>
      <CardMedia className="h-[140] sm:h-[100]" component="img" height="140" image={url} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
