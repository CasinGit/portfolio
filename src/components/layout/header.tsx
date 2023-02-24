import { Box } from "@mui/material";
import Toc from "./toc";

export default function HeaderComponent() {
    return (
        <Box sx={{ display: "flex" }}>
            <Toc />
        </Box>
    )
}