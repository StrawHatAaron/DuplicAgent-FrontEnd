import React from "react";
import TextField from '@material-ui/core/TextField';
import {withStyles,} from '@material-ui/styles';


const CssTextField = withStyles({
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

const DivWidth = {
    width:'100%'
}

export default function SharpTextField(props){
    return(
        <div style={DivWidth}>
            <CssTextField
                    variant="outlined"
                    margin="normal"
                    required={props.required}
                    fullWidth
                    multiline={props.multiline}
                    placeholder={props.placeholder}
                    id={props.id}
                    label={props.label}
                    name={props.name}
                    autoComplete={props.autoComplete}/>
        </div>
    )
}