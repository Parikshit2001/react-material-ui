import { List, ListItem, ListItemText } from "@mui/material"


function ListComponent() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary="Hello"/>
        </ListItem>
        <ListItem>
          <ListItemText primary="Hello"/>
        </ListItem>
        <ListItem>
          <ListItemText primary="Hello"/>
        </ListItem>
      </List>
    </div>
  )
}

export default ListComponent