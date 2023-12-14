// Import necessary components from Material-UI
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

// Your main component
function DrawerComponent() {
  return (
    <div style={{ display: 'flex' }}>
      {/* Permanent Left Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Item 2" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: '20px' }}>
        {/* Your main content goes here */}
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    </div>
  );
}

export default DrawerComponent;
