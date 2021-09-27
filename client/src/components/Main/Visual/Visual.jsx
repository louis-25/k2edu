import React, { useState } from 'react';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';
// Import Swiper React components
import Carousel from 'react-material-ui-carousel'
import classnames from 'classnames'
import style from './Visual.module.css'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
} from '@material-ui/core';
import './style.css'
// install Swiper modules
function Visual() {
  const autoPlay = true
  const animation = "slide"
  const indicators = true
  const timeout = 500
  const navButtonsAlwaysVisible = false
  const navButtonsAlwaysInvisible = false
  const cycleNavigation = true

  function Banner(props) {
    if (props.newProp) console.log(props.newProp)
    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
      <Grid item xs={12 / totalItems} key="content">
        <CardContent className="Content">
          <Typography className="Title">
            {props.item.Name}
          </Typography>

          <Typography className="Caption">
            {props.item.Caption}
          </Typography>

          <Button variant="outlined" className="ViewButton">
            View Now
          </Button>
        </CardContent>
      </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
      const item = props.item.Items[i];

      const media = (
        // <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia
          className={classnames(style.card,"Media")}
          image={item.Image}
          title={item.Name}
        >
          <Typography className="MediaCaption">
            {item.Name}
          </Typography>
        </CardMedia>

        // </Grid>
      )

      items.push(media);
    }

    if (contentPosition === "left") {
      items.unshift(content);
    } else if (contentPosition === "right") {
      items.push(content);
    } else if (contentPosition === "middle") {
      items.splice(items.length / 2, 0, content);
    }

    return (
      <CardMedia
      className={classnames(style.card,"Media")}
        image={"https://source.unsplash.com/featured/?macbook"}
        title={"iphone"}
      >        
        <Typography className="MediaCaption">                 
        </Typography>
      </CardMedia>
    )
  }

  const items = [
    {
      Name: "Electronics",
      Caption: "Electrify your friends!",
      contentPosition: "left",
      Items: [
        {
          Name: "Macbook Pro",
          Image: "https://source.unsplash.com/featured/?macbook"
        },
        {
          Name: "iPhone",
          Image: "https://source.unsplash.com/featured/?iphone"
        }
      ]
    },
    {
      Name: "Home Appliances",
      Caption: "Say no to manual home labour!",
      contentPosition: "middle",
      Items: [
        {
          Name: "Washing Machine WX9102",
          Image: "https://source.unsplash.com/featured/?washingmachine"
        },
        {
          Name: "Learus Vacuum Cleaner",
          Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
        }
      ]
    },
    {
      Name: "Decoratives",
      Caption: "Give style and color to your living room!",
      contentPosition: "right",
      Items: [
        {
          Name: "Living Room Lamp",
          Image: "https://source.unsplash.com/featured/?lamp"
        },
        {
          Name: "Floral Vase",
          Image: "https://source.unsplash.com/featured/?vase"
        }
      ]
    }
  ]
  return (
    <div>      
      <Carousel
        className="Example"
        autoPlay={autoPlay}
        animation={animation}
        indicators={indicators}
        timeout={timeout}
        cycleNavigation={cycleNavigation}
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
        // next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
      // fullHeightHover={false}
      // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
      // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
      // indicatorContainerProps={{style: {margin: "20px"}}}
      // NextIcon='next'
      >
        {
          items.map((item, index) => {
            return <Banner item={item} key={index} contentPosition={item.contentPosition} />
          })
        }
      </Carousel>


    </div>
  )
}
function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  )
}

export default Visual;