import { Box, IconButton, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as Velog } from "./svg/velog.svg";
import { ReactComponent as GitHub } from "./svg/github.svg";
import { ReactComponent as Gmail } from "./svg/gmail.svg";

export default function FooterComponent() {
    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ mb: 2 }}>
                <IconButton sx={{ color: "whitesmoke" }} href="https://github.com/CasinGit">
                    <SvgIcon component={GitHub} fontSize="large" inheritViewBox />
                </IconButton>
                <IconButton sx={{ color: "whitesmoke" }} href="https://velog.io/@casin">
                    <SvgIcon component={Velog} fontSize="large" inheritViewBox />
                </IconButton>
                <IconButton sx={{ color: "whitesmoke" }} href="mailto:kkig30@naver.com">
                    <SvgIcon component={Gmail} fontSize="large" inheritViewBox />
                </IconButton>
            </Box>
            <Typography>
                © 2022. Kim Ki Hyeop. All rights reserved.
            </Typography>
        </Box>
    )
}