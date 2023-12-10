import { Typography } from '@mui/material'

function TypographyComponent() {
  return (
    <div>
        <Typography 
          gutterBottom
          variant='h1' 
          color='primary'
          >
            Heading 1
        </Typography>
        <Typography 
          gutterBottom={'true'} 
          variant="h2"
          color={'secondary'}
          >
            Heading 2
        </Typography>
        <Typography 
          variant="h3"
          color={'error'}
          >
            Heading 3
        </Typography>
        <Typography 
          variant="body1"
          gutterBottom
          >
            Body Text
        </Typography>
      </div>
  )
}

export default TypographyComponent