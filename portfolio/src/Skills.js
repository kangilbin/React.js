import React, {useState } from "react";
import { Grid } from '@mui/material';
import Chip from '@mui/material/Chip';

const Skills = ({select, setSelect}) => {
  const lst = [{ id:1, name : "Java"}, { id:2, name : "Kotlin"}, { id:3, name : "JavaScript"}, {id:4, name:"JQuery"},
                { id:5, name : "Jsp"}, { id:6, name : "ReactJS"}, { id:7, name : "PostgreSQL"}, { id:8, name : "MariaDB"}, 
                { id:9, name : "Spring Boot"}, { id:10, name : "Spring Framework"}, { id:11, name : "Jex Framework"}, 
                { id:12, name : "Android Studio"}, { id:13, name : "Git"}, { id:14, name : "SVN"}]

  const [pick] = useState(lst);

  return (
    <div>
      <Grid container spacing={2}>
        {pick.map((rec) => (
            <Grid item>
            <Chip label={ rec.name } sx={{fontWeight: "bold"}} color="secondary" variant={select.includes(rec.id) ? "contained" : "outlined"} key={rec.id} 
                onClick={() => {
                 !select.includes(rec.id)
                  ? setSelect((select) => [...select, rec.id])
                  : setSelect(select.filter((button) => button !== rec.id));
            }}/></Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills