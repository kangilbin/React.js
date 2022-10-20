import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import TopBar from "./TopBar";
import { Avatar } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Skills from "./Skills";
import ProjectCard from "./ProjectCard";
import React, { useState, useEffect, useRef } from "react";
import Intro from "./Intro";

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const steps = [
    <ListItemText
      primary="한국 폴리텍 정수캠 졸업"
      secondary="2015.02 ~ 2017.03"
    />,
    <ListItemText
      primary="학점 은행제 학사 취득"
      secondary="2018.10 ~ 2020.02"
    />,
    <ListItemText
      primary="한국소프트웨어 인재개발원"
      secondary="2020.10 ~ 2021.03"
    />,
    <ListItemText primary="로움아이티" secondary="2021.05 ~ 재직중" />,
  ];

  const [select, setSelect] = useState([]);
  const [tab, setTab] = useState("prf");

  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) mounted.current = true;
  }, [select]);

  const drawer = (
    <div style={{ alignSelf: "center" }}>
      <Toolbar />
      <ListItem>
        <Avatar
          alt="img_profile"
          src="img/profile.jpg"
          sx={{ width: 250, height: 210 }}
        />
      </ListItem>
      <Toolbar />
      <ListItem>
        <ListItemText primary="강일빈" secondary="1993. 02. 07" />
      </ListItem>
      <Toolbar />
      <Divider />
      <ListItem>
        <Stepper activeStep={3} orientation="vertical">
          {steps.map((label, idx) => (
            <Step key={idx}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </ListItem>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        color="inherit"
      >
        <TopBar tab={tab} setTab={setTab} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {tab !== "prf" ? (
          <div>
            <Skills select={select} setSelect={setSelect} />
            <ProjectCard select={select} tab={tab} />
          </div>
        ) : (
          <div>
            <Intro />
          </div>
        )}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
