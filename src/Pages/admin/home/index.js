import { Box } from "@mui/material";
import React ,{useEffect} from "react";
import { List, Navbar } from "../../../Component";
import Typography from "@mui/material/Typography";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";
function Home() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
    useEffect(() => {
    if (value === 0) {
      navigate("/admin/home");
    } else if (value === 1) {
      navigate("/admin/add-item");
    }
  }, [value]);
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          marginTop: 2,
          paddingLeft:3
        }}
      >
        <Box>
          <Typography
            variant="button"
            gutterBottom
            sx={{
              color: "secondary.main",
            }}
          >
            All Products
          </Typography>
        </Box>
        <Box>
        <List />
        <List />
        <List />
        <List />
        </Box>
      </Box>
      <Box sx={{
        display:"flex",
        justifyContent:"flex-end"
      }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background:"#ffff",
          position:"fixed",
          top:520,
          left:0,
          right:0,
         }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="add-item" icon={<AddIcon />} />
        <BottomNavigationAction label="account" icon={<AccountBoxIcon />} />
      </BottomNavigation>
      </Box>
    </div>
  );
}

export default Home;
