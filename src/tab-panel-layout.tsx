import Box from "@mui/material/Box";

interface TabPanelLayoutProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanelLayout(props: TabPanelLayoutProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
      className="lg:w-[95%] mt-4 shadow-md w-[100%]"
    >
      {value === index && (
        <Box
          sx={(theme) => ({
            p: 3,
            [theme.breakpoints.down("lg")]: {
              p: 0,
              width: "100%",
            },
          })}
        >
          {children}
        </Box>
      )}
    </div>
  );
}
