import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

const SmCard = (props) => {
  let {id, title,body,height} = props;
  return (
    
      <Card elevation={8} sx={{ height}}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Id = {id}
              </Typography>
             <Divider/>
             <Typography variant="h4" color="text.secondary">
                 Title
              </Typography>
              <Typography variant="h5" color="text.secondary">
                 {title}
              </Typography>
              <Divider/>
              <Typography variant="p" color="text.secondary">
              {body}
              </Typography>
            </CardContent>
          </Card>
      
  );
};

export default SmCard;
