import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Box.css';
import { SketchPicker } from 'react-color'
import Object from './Object';

const Box = () => {
    const [borderWidth, setBorderWidth] = useState(0);
    const [top, setTop] = useState(0);
    const [option, setOption] = useState('');
    const [bottom, setBottom] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [color, setColor] = useState('#fff');

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    const handleChange = (color, event) => {
        setColor(color.hex);
    };

    const handleChangeOption = (event) => {
        setOption(event.target.value);
    };

    return (
        <>
            <div className="app">
                <div className="app__controls">
                    <div className="app__controlsContainer">
                        <h1>
                            Border Generator
                        </h1>
                        <div className="app__control">
                            <p style={{ marginRight: "25px", marginBottom: "5px" }}>Border:</p>
                            <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setBorderWidth(value)} style={{ marginLeft: "20px" }} />
                            <input type="text" value={borderWidth} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
                        </div>
                        <br />
                        <div className="app__control">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Border Style</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={option}
                                    label="Border Style"
                                    onChange={handleChangeOption}
                                >
                                    <MenuItem value={'solid'}>solid</MenuItem>
                                    <MenuItem value={'dotted'}>dotted</MenuItem>
                                    <MenuItem value={'dashed'}>dashed</MenuItem>
                                    <MenuItem value={'double'}>double</MenuItem>
                                    <MenuItem value={'groove'}>groove</MenuItem>
                                    <MenuItem value={'ridge'}>ridge</MenuItem>
                                    <MenuItem value={'inset'}>inset</MenuItem>
                                    <MenuItem value={'outset'}>outset</MenuItem>
                                    <MenuItem value={'none'}>none</MenuItem>
                                    <MenuItem value={'hidden'}>hidden</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <br />
                        <SketchPicker color={color} onChange={handleChange} onChangeComplete={handleChangeComplete} />
                    </div>
                    <div className="app__controlsContainer">
                        <br />
                        <br />
                        <div className="app__control">
                            <p style={{ marginRight: "-8px", marginBottom: "5px" }}>Border Top:</p>
                            <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setTop(value)} style={{ marginLeft: "20px" }} />
                            <input type="text" value={top} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
                        </div>
                        <div className="app__control">
                            <p style={{ marginRight: "-33px", marginBottom: "5px" }}>Border Bottom:</p>
                            <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setBottom(value)} style={{ marginLeft: "20px" }} />
                            <input type="text" value={bottom} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
                        </div>
                        <div className="app__control">
                            <p style={{ marginRight: "8px", marginBottom: "5px" }}>Border Left:</p>
                            <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setLeft(value)} />
                            <input type="text" value={left} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
                        </div>
                        <div className="app__control">
                            <p style={{ marginRight: "0px", marginBottom: "5px" }}>Border Right:</p>
                            <Slider min={0} max={200} defaultValue={0} onChange={(event, value) => setRight(value)} />
                            <input type="text" value={right} style={{ height: '30px', width: '50px', margin: "0 10px 5px 10px" }} />
                        </div>
                        <Object borderWidth={borderWidth} top={top} bottom={bottom} left={left} right={right} option={option} color={color}/>
                    </div>
                </div>
            </div>
            <p className="copy">Created By @Aryan Garg &copy;2022</p>
        </>
    )
}

export default Box;