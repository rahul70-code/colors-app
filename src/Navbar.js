import React, { Component } from 'react';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton'
import "rc-slider/assets/index.css";
import Slider from 'rc-slider';
import './Navbar.css'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { format: "hex", open: true };
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({open:false})
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>ReactColorPicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255, 1)</MenuItem>
                    </Select>
                    <Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format changed</span>}
                    ContentProps={{
                        "aria-describedBy": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                    <IconButton 
                        onClick={this.closeSnackbar} 
                        color='inherit'
                        key="close" 
                        aria-label="close">
                        <CloseIcon />
                    </IconButton>]}
                    />
                </div>
            </header>
        )
    }
}

export default Navbar