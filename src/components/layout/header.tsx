import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function HeaderComponent() {
    return (
        <IconButton sx={{ m: 3, color: "black !important" }} href="#Top">
            <KeyboardDoubleArrowUpIcon />
        </IconButton>
    )
}