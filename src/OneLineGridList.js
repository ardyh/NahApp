import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import tileData from './tileData';
import image1 from './Pictures/Night_lights_by_Alberto_Salvia_Novella.jpg';
import image2 from './Pictures/pexels-photo-1366957.jpeg';
import image3 from './Pictures/pexels-photo-1319839 (1).jpeg';
import image4 from './Pictures/pexels-photo-1108701.jpeg';
import image5 from './Pictures/pexels-photo-1036914.jpeg';
import image6 from './Pictures/pexels-photo-595354.jpeg';
import image7 from './Pictures/pexels-photo-417194.jpeg';
import image8 from './Pictures/Madina HD Wallpapers 2014 (1).jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const tileData = [
    {
      img: image1,
      title: 'Image',
      author: 'author',
    },
    {
      img: image2,
      title: 'Image',
      author: 'author',
    },
    {
      img: image3,
      title: 'Image',
      author: 'author',
    },
    {
      img: image4,
      title: 'Image',
      author: 'author',
    },
    {
      img: image5,
      title: 'Image',
      author: 'author',
    },
    {
      img: image6,
      title: 'Image',
      author: 'author',
    },
];

function SingleLineGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
