import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { NotificationsNone, ArrowForwardIos, PersonOutlineOutlined, AutoAwesomeMosaicOutlined } from "@mui/icons-material";
import Logo from "../components/logo.js";
import { Link } from "@mui/material";

export default function SideBar() {
  return (
    <Box
      pt={7}
      width={256}
      height={"100vh"}
      color={"#FFFFFF"}
      bgcolor={"#3380C5"}
    >
      <Box pb={3}>
        <Logo />
      </Box>
      <Box>
        <List>
          <ListItem sx={{paddingLeft: 3}}>
            <ListItemIcon sx={{minWidth: 32}}>
              <NotificationsNone sx={{color: "#FFFFFF"}}/>
            </ListItemIcon>
            <ListItemText primary="個別通知" />
          </ListItem>
          <List sx={{paddingLeft: 3}}>
            <ListItem>
              <ListItemIcon sx={{minWidth: 32}}>
                <ArrowForwardIos fontSize="small" sx={{color: "#FFFFFF"}}/>
              </ListItemIcon>
              <Link href="#" color={"#FFFFFF"}>{"E-mail通知"}</Link>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{minWidth: 32}}>
                <ArrowForwardIos fontSize="small" sx={{color: "#FFFFFF"}}/>
              </ListItemIcon>
              <Link href="#" color={"#FFFFFF"}>{"SMS通知"}</Link>
            </ListItem>
          </List>
          <ListItemButton sx={{paddingLeft: 3, paddingTop: 2, paddingBottom: 2}}>
            <ListItemIcon sx={{minWidth: 32}}>
              <AutoAwesomeMosaicOutlined sx={{color: "#FFFFFF"}}/>
            </ListItemIcon>
            <ListItemText primary="テンプレート" />
          </ListItemButton>
          <ListItemButton sx={{paddingLeft: 3, paddingTop: 2, paddingBottom: 2}}>
            <ListItemIcon sx={{minWidth: 32}}>
              <PersonOutlineOutlined sx={{color: "#FFFFFF"}}/>
            </ListItemIcon>
            <ListItemText primary="ユーザー管理" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
}
