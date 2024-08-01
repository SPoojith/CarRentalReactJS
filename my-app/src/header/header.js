import './header.css';
import React, { useState ,useEffect} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import strictTeacherImage from '../Assests/strict_teacher.jpeg';
import MenuIcon from '@mui/icons-material/Menu';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { RedAndBlack, RedAndWhite, purpleAndBlack, purpleAndWhite } from '../colors';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";
function Header({color,changeBackgroundColor}) {
    let n = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const [UserName, setUserName] = useState("Jack Doe");
    const [data,setData] = useState("hi");
    const open = Boolean(anchorEl);

    useEffect(()=>{
        console.log("use Effect Triggered",data)
    },[data])

    useEffect(() => {
        let name = localStorage.getItem('profile');
        setUserName(name? 'Poojith':'Poojith Santhosh Kumar')
    }, [UserName]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeTheme = (index) => {
        let lists = [RedAndBlack,RedAndWhite, purpleAndBlack,purpleAndWhite]
        // console.log(index)
        changeBackgroundColor(lists[index]);
    };
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
        setAnchorEl(null);
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
            <List>
                <div style={{
                    display:'flex',justifyContent:'center'
                }}>
                    <p>Account</p>
                </div>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=>{
                        setData("hello")
                    }}>
                        <ListItemIcon>
                            <AccountCircleIcon></AccountCircleIcon>
                        </ListItemIcon>
                        <ListItemText primary={UserName} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon></LogoutIcon>
                        </ListItemIcon>
                        <ListItemText primary={'LogOut'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <div style={{
                    display:'flex',justifyContent:'center'
                }}>
                    <p>Settings</p>
                </div>
                {['Red And Black', 'Red And White', 'purple And Black', 'purple And White','grren and blue'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton onClick={()=>{
                        changeTheme(index);
                    }}>
                    <ListItemIcon>
                        <ColorLensIcon></ColorLensIcon>
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItemButton>
                    
                </ListItem>
                ))}
            </List>
          <Divider />
          <List>
                <ListItem key={"Admin"} disablePadding>
                    <ListItemButton onClick={()=>{
                        console.log("clicked");
                        n("/Contact");
                    }}>
                    <ListItemIcon>
                        <AdminPanelSettingsOutlinedIcon></AdminPanelSettingsOutlinedIcon>
                    </ListItemIcon>
                    <ListItemText primary={"Contact Page"} />
                    </ListItemButton>
                    
                </ListItem>
            </List>
          
        </Box>
      );
    return(
        <div className="Header" style={{ '--header-bg-color':  color.header}}>
            <div className="Img">
                <img src={strictTeacherImage} alt="My Image" style={{ width: '30px', height: '30px',borderRadius:'20px'}}/>
                <h2 style={{paddingLeft:'10px',margin:'0%'}}>Car Rental</h2>
            </div>
            <div className="Menu">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    // onClick={handleClick}
                    onClick={toggleDrawer('right', true)}
                    style={{color:'white'}}
                >
                    <MenuIcon></MenuIcon>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >                    
                    <MenuItem >My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    )
}

export default Header;
