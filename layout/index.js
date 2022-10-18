import { Box } from "@mui/material";
import SideBar from "./sideBar";
import Contents from "./contents";

export default function Layout({children}) {
  return (
    <Box display={"flex"}>
      <SideBar />
      <Contents>{children}</Contents>
    </Box>
  );
}
