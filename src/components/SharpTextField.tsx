import React from "react";
import TextField from '@material-ui/core/TextField';
import {withStyles,} from '@material-ui/styles';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#DE6D43',
        },'& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#54B0F2',
            },'&:hover fieldset': {
                borderColor: '#003142',
            },'&.Mui-focused fieldset': {
                borderColor: '#DE6D43',
            },
        },
    },
})(TextField);

const DivWidth = {
    width:'100%'
}

interface Props {
    required?: boolean;
    multiline?: boolean;
    placeholder: string;
    id: string;
    label: string;
    name: string;
    autoComplete: string
}

export const SharpTextField: React.FC<Props> = ({required,
    multiline,
    placeholder,
    id,
    label,
    name,
    autoComplete,}) => {

    return(
        <div style={DivWidth}>
            <CssTextField
                variant="outlined"
                margin="normal"
                required={required}
                fullWidth
                multiline={multiline}
                placeholder={placeholder}
                id={id}
                label={label}
                name={name}
                autoComplete={autoComplete} />

        </div>
    )
}