import React from 'react'
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ url, title, description, live }) => {
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
      <CardActions className='center'>
        <a className='text-white font-bold bg-green-600 border-l-emerald-400 px-5 py-2 hover:bg-sky-600' href={live} target='_blank' >Live</a>
      </CardActions>
    </Card>
  )
}

export default ProjectCard