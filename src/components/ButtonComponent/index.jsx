import React from "react";
import './style.scss';
import Button from '@mui/material/Button';


class ButtonComponent extends React.Component {

    /**
     * 
     * @param {*
     *      style,
     *      label,
     *      value,
     *      onSave
     * } props 
     */

    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        }
    }

    render() {
        return (<div className='hor-row button-container-main'
            style={this.props.style} >
            <Button variant="contained">
                { this.props.label }
            </Button>
        </div>
        )
    }
}
export default ButtonComponent;