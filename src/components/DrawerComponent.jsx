import { Drawer, Typography } from "@mui/material"

const drawerWidth = 240;

const drawerStyles = {
  width: drawerWidth,
  variant: "permanent",
  anchor: "left"
}

function DrawerComponent() {
  return (
    <div>
      <Drawer>
        <div>
          <Typography 
            sx={drawerStyles}
            variant="h5"
          >
            Ninja Notes
          </Typography>
        </div>
      </Drawer>
    </div>
  )
}

export default DrawerComponent