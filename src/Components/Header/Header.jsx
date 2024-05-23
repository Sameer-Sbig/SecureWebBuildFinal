import React from 'react';
import classes from "./Header.module.css";
import logo from "../../images/SBIG Secure logo image.png";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className={classes.header}>
                <div >
                    <NavLink to="/">
                        <img src={logo} alt="SBI Secure Logo" />
                    </NavLink>
                    
                </div>

                <div>
                    <FormControl
                        sx={{
                            m: 1,
                            borderRadius: '100px',
                            width: '50ch',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-root': {
                                backgroundColor: 'white',
                            },
                        }}
                        variant="outlined"
                        size="small"
                    >
                        <OutlinedInput
                            id="outlined-adornment-search"
                            placeholder="Search"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="search" edge="end">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>

                <div>
                    <IconButton size="large">
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                </div>
            </nav>
        </>
    );
};

export default Header;