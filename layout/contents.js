
import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";

const Content = styled(Box)(() => ({
    width: `calc(100vw - 256px)`
  }));

export default function Contents({children}) {
  return (
    <Content pl={7} pr={5} pt={4} pb={7}>
      {children}
    </Content>
  )
}
