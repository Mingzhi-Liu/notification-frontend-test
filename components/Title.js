import { Button, Box, Typography, Divider } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

export default function Title ({title = "", endButton = null}) {
  return (
    <>
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} pr={1} pl={"4px"} pt={7} pb={4}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {endButton && (
      <Button href={endButton.href} variant="outlined" startIcon={<AddIcon />}>
        {endButton.label}
      </Button>
      )}
    </Box>
    <Divider />
    </>
  )
}
