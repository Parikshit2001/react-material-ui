import { DeleteOutlined } from "@mui/icons-material"
import { Card, CardContent, CardHeader, CardMedia, Hidden, IconButton, Typography } from "@mui/material"
import { useEffect, useState } from "react"

function CardComponent() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json));
  }, [])

  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'16px'}}>
      {/* <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => {console.log("Delete")}}>
              <DeleteOutlined/>
            </IconButton>
          }
          title={"Architecture"}
          subheader={"Architecture should speak of its time and place, but yearn for timelessness"}
        />
        <CardContent>
          <Typography variant="body2" color={"textSecondary"}>
            ...Architecture is the artful fusion of form and function, shaping the physical environment we inhabit. It transcends mere construction, weaving together aesthetics, technology, and human experience. Each structure tells a unique story, reflecting the culture and aspirations of its time. In its harmonious blend of creativity and practicality, architecture stands as a testament to humanity&apos;s innate desire to craft spaces that inspire and endure.
          </Typography>
        </CardContent>
      </Card> */}
      {data.map(item => (
        <Card key={item.id} elevation={3} sx={{width:300, height:500}}>
          <CardMedia
            component="img"
            height="194"
            image={item.image}
            alt="Paella dish"
            sx={{height:250}}
          />
          <CardContent>
            <Typography variant='h5' sx={{height: 50, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{height:100, overflow:'hidden'}}>
              {item.description}
            </Typography>
            <Typography variant="h1">
              $ {item.price}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default CardComponent