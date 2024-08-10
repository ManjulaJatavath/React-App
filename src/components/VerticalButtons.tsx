import { Container, Box, Button } from '@mui/material';


const VerticalButtons = () => {
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right', }}>
        <Box sx={{mt:5,mb:5}}>
        <Button variant="contained">Button 1</Button>
        </Box>
        <Box sx={{mt:5,mb:5}}>
        <Button variant="contained">Button 2</Button>
        </Box>
        <Box sx={{mt:5,mb:10}}>
        <Button variant="contained">Button 3</Button> 
        </Box>
      </Box>
    </Container>
  )
}

export default VerticalButtons

// import React from 'react';
// import { Drawer, List, ListItem, Button } from '@mui/material';

// const SidebarWithButton = () => {
//   return (
//     <Drawer variant="permanent">
//       <List>
//         <ListItem>
//           <Button variant="contained">Sidebar Button</Button>
//         </ListItem>
//         <ListItem>
//           <Button variant="contained">Home</Button>
//         </ListItem>
//         <ListItem>
//         <Button variant="contained">Profile</Button>
          
//         </ListItem>
//         <ListItem>
//         <Button variant="contained">Settings</Button>
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default SidebarWithButton;