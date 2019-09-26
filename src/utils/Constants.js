import {makeStyles, withStyles} from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

//colors
export const blue = '#003142';
export const lightBlue = '#54B0F2';
export const orange = '#DE6D43';
export const white = '#FFFFFF';
export const whiteBacking = '#F5F5F5';
export const softWhite = '#C4C4C4';
export const greyBacking = '#D3D3D3';
export const greyText = '#868585';

  //font type
export const fontFam = 'Skia';

//material-ui

//style for the buttons
export const ButtonStyle = makeStyles(theme => ({
  button: {
      width: '100%',
      background: lightBlue,
      '&:hover':{
        background: blue
      }
  },
  rightIcon: {
      fontSize: 20,
      marginLeft:'.2em'
  },    
}));

//style for the text fields
export const CssTextField = withStyles({
  root: {
      '& label.Mui-focused': {
          color: '#DE6D43',
      },
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
              borderColor: '#54B0F2',
          },
          '&:hover fieldset': {
              borderColor: '#003142',
          },
          '&.Mui-focused fieldset': {
              borderColor: '#DE6D43',
          },
      },
  },
})(TextField);

//style for the check boxes
const CheckBoxStyles = theme => ({
    root: {
        '&$checked': {
            color: '#54B0F2',
        },
    },
    checked: {},
});
export const CustomCheckbox = withStyles(CheckBoxStyles)(Checkbox);