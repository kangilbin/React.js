import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Alert, Avatar, Divider, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

  
export default function Elevation() {
const [anchorEl, setAnchorEl] = useState(null);

const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
    };
const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;
    
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Alert icon={false} severity="success">
                <Typography  align="right" variant="h6" sx={{ fontWeight: "bold" }}>"MAU를 30%이상 끌어올린, 사용자 관점에서 개발하는 개발자 강일빈입니다."</Typography>
            </Alert>
        </Grid>
        <Grid item xs={6}>
              <Item elevation={10}>
                  <List>
                    <ListItem>
                             <ListItemAvatar>
                            <Avatar>
                                <PersonOutlineOutlinedIcon  />
                            </Avatar>
                            </ListItemAvatar>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>Introduction</Typography>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <Typography paragraph>
                        &nbsp;안녕하십니까! 2년차 웹 개발자 강일빈입니다. <br />
                        도전을 두려워하지 않기에 새로운 기술과 방법이 나왔을 때 적극 수용하고,<br />
                        사용자 관점으로 무엇이필요한고 어떠한 것을 원하는지 끊임없이 고민하며 <br />
                        사용자 관점의 개발자를 지향하고 있습니다. <br />
                        </Typography>
                    </ListItem>
                </List>
            </Item>
          </Grid>
          <Grid item xs={6}>
              <Grid>
                <Item elevation={10}>
                      <List>
                        <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ContactPhoneOutlinedIcon  />
                                </Avatar>
                                </ListItemAvatar>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>Contact</Typography>
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        <ListItemText primary="PH." secondary="010-6638-5827" />
                        <ListItemText primary="Email. " secondary="kib3388@naver.com" />
                    </List>
                  </Item>
              </Grid>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={10}>
                  <List>
                        <ListItem>
                             <ListItemAvatar>
                            <Avatar>
                                <FolderOutlinedIcon  />
                            </Avatar>
                            </ListItemAvatar>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>Storage</Typography>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                      <Grid item xs={2}><Typography gutterBottom variant="bodoy1" component="div" sx={{ fontWeight: "bold" }}>● Git ▶&nbsp;</Typography></Grid>
                      <Grid item xs={2}><Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                                document.location.href='https://github.com/kangilbin'
                              }}
                              color="secondary"
                            >
                            {'GitHub Address'}
                          </Link></Grid>
                      </ListItem>
                        <ListItem>
                            <Grid item xs={2}><Typography gutterBottom variant="bodoy1" component="div" sx={{ fontWeight: "bold" }}>● Notion ▶&nbsp;</Typography></Grid>
                          <Grid item xs={2}>
                            <Button aria-describedby={id} variant="outlined" color="secondary"onClick={handleClick}>
                                Notion Storage
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                                }}
                            >
                                 <img src={"img/notion.jpg"} style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '70%'
                                }}></img>
                            </Popover>
                             </Grid>
                        </ListItem>
                  </List>    
            </Item>
          </Grid>
    </Grid>
  );
}