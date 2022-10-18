import { HomeOutlined } from "@mui/icons-material";
import { Divider, Breadcrumbs, Link, Typography } from "@mui/material";

export default function CustomBreadcrumbs({lists = []}) {
  return (
    <>
      <Breadcrumbs sx={{paddingLeft: 1, paddingBottom: 3}}>
        <Link
          component="a"
          href="/"
          sx={{color: "#999999"}}
        >
          <HomeOutlined fontSize="medium" />
        </Link>
        {lists.map((list, index) => {
          return (
            list.href ? (
              <Link
                key={`${index}_link`}
                component="a"
                href={list.href}
                color={"primary"}
              >
              {list.label}</Link>
            ) : (
              <Typography key={`${index}_text`} color={"text.primary"}>{list.label}</Typography>
            )
          );
        })}
      </Breadcrumbs>
      <Divider />
    </>
  );
}
