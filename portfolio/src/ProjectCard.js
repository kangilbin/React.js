import React, { useState, useRef, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Toolbar } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import OpenProject from "./OpenProject";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProjectCard = ({select, tab}) => {
  var pjtLst = [{id:1, tab:"work", path:"img/brif/brif_main.jpg", title:"프리미엄 보고서 서비스", use:[1, 3, 4, 5, 7, 11, 14]}, {id:2, tab:"work", path:"img/empl/empl_main.jpg", title:"직원관리 서비스", use:[1, 3, 4, 5, 7, 11, 14]}, 
                  {id:3, tab:"work", path:"img/menu/menu_main.jpg", title:"전체 메뉴 서비스", use:[1, 3, 4, 5, 7, 11, 14]}, {id:4, tab:"work", path:"img/appSet/setting_main.jpg", title:"앱 설정 서비스", use:[1, 3, 4, 5, 7, 11, 14]}, 
                  {id:5, tab:"clone", path:"img/air/air_main.jpg", title:"메시먼지 앱", use:[2, 12]}, {id:6, tab:"clone", path:"img/todo/todo_main.jpg", title:"Todo List", use:[1, 3, 6, 9]}];
  const tag = {1:"Java", 2:"Kotlin", 3:"JavaScript", 4:"JQuery", 5:"Jsp", 6:"ReactJS", 7:"PostgreSQL", 8:"MariaDB", 9:"Spring Boot", 10:"Spring Framework",11:"Jex Framework", 12:"Android Studio", 13:"Git", 14:"SVN"}
  const [sltLst] = useState(pjtLst)

  const mounted = useRef(false)

  useEffect(() => {
    if(!mounted.current) mounted.current = true
  },[sltLst]);  
  if(select.length === 0) {
    select = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  }



  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  const [open, setOpen] = useState(false)
  const [id, setId] = useState()
  const handleClickOpen = (val) => {
    setOpen(true);
    setId(val)
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <Toolbar />
      <Grid container spacing={7}>
      {sltLst.map((slt) => 
          { var isTrue = false
            select.map((items) => { 
              if(slt.use.includes(items)) isTrue = true 
            })
            return ((isTrue && tab === slt.tab) || (isTrue&&tab === "all")) ? ( 
              <Grid item xs={12} md={4} onClick={() => handleClickOpen(slt.id)} >
                <Card sx={{ maxWidth: 445 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="500"
                      image={slt.path}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "bold"}}>
                        {slt.title}
                      </Typography>
                      <div>
                        <Stack direction="row" spacing={2}>
                        <Grid container spacing={2}>
                        { slt.use.map(item => <Grid item><Item>{tag[item]}</Item></Grid> )} 
                        </Grid>
                        </Stack>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ) : (<Grid></Grid>)
        })}
       </Grid>
       <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
        <OpenProject id={id} handleClose={ handleClose } />
      </BootstrapDialog>
    </div>
  );
}

export default ProjectCard
 