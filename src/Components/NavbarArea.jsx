import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Tab, Button, Drawer, ListItemButton, ListItemIcon, ListItemText, List, IconButton, useMediaQuery, useTheme, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const styles1 = {
  fontSize:'12px',marginLeft:'auto',textTransform:'capitalize',color:'black',borderRadius:'20px',fontWeight:'bold','&.MuiButton-contained':{backgroundColor:'#0FF1F6'}
};

const styles2 = {
  fontSize:'12px',marginLeft:'10px',textTransform:'capitalize',color:'white',borderRadius:'20px',marginRight:'15px',border:'1px white solid'
};

function NavbarArea() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const Pages = ['About Us','Pricing','Customers','Solutions'];
  const PAGE = ['About Us','Pricing','Customers','Solutions','Book a Demo','Contact Us'];
  return (
    <>
      <AppBar position='static' elevation={0} sx={{backgroundColor:'#002228',maxWidth:'1200px',margin:'0 auto'}}>
        <Toolbar sx={{color:'white'}}>
         <Typography>
              <img src="/Logo.svg" alt="" />
            </Typography>
         {
          isMatch ? (
            <>
            <Drawer open={drawerOpen} onClose={()=> setDrawerOpen(false)}>
               <List>
                {
                  PAGE.map((page,index)=>(
                    <ListItemButton onClick={()=> setDrawerOpen(false)} key={index}>
                    <ListItemIcon>
                       <ListItemText>{page}</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                  ))} 
              </List>
            </Drawer>
            <IconButton sx={{color:'white',marginLeft:'auto'}} onClick={()=> setDrawerOpen(!drawerOpen)}>
               <MenuIcon />
            </IconButton>
            </>
          ):(
               <>
               <Tabs sx={{marginLeft:'auto'}}
                textColor='inherit'
                indicatorColor='inherit'
                value={value}
                onChange={(e,value)=> setValue(value)}
               >
                {
                  Pages.map((page,index)=>(
                    <Tab key={index} label={page} sx={{textTransform:'capitalize'}} />
                  ))}
         </Tabs>
         <Button variant='contained' sx={styles1}>Book a Demo</Button>
         <Button variant='outlined' sx={styles2}>Contact Us</Button>
            </>
          )}
        </Toolbar>            
      </AppBar>
    </>
  )
};

export default NavbarArea;