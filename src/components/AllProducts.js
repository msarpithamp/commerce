import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';

function AllProducts() {
  const[data,setData]=useState([]);
  const[search,setSearch]=useState(null);
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((res)=>{
      console.log(res.data.products)
      setData(res.data.products)
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);

  const filtered=search?data.filter((item)=>
  item.title.toLowerCase().includes(search.toLowerCase())
):data;

console.log(filtered,'filteredData');

  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField label={"Search products here"}
        onChange={(e)=>setSearch(e.target.value)}/>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
         >
        {filtered.length > 0 ?
        filtered.map((product)=>(
          <Card sx={{ maxWidth: 345 }} key={product.id}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            width="200"
            image={product.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="h5">₹{product.price}</Typography>

            <Typography
              variant="h5"
              style={{ textAlign: "end", width: "100%" }}
            >
              {product.brand}
            </Typography>
          </CardActions>
        </Card>
        )):
        <Box>
        <Alert severity="warning">No search found</Alert>
        </Box>
}
      </Grid>
    </div>
  );
}

export default AllProducts;
