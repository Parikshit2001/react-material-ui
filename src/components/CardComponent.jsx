import { DeleteOutlined } from "@mui/icons-material"
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material"


function CardComponent() {
  return (
    <div>
      <Card elevation={3}>
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
      </Card>
    </div>
  )
}

export default CardComponent