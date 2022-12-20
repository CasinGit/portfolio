import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDetailDialog({ state, close }: { state: boolean, close: () => void }) {
    const [markdown, setMarkdown] = React.useState<string>("");

    const markdownPath = require("./markdown/EatToDay.md");
    fetch(markdownPath)
        .then(r => r.text())
        .then(text => {
            console.log(text)
            setMarkdown(text);
        })

    return (
        <div>
            <Dialog
                fullScreen
                open={state}
                onClose={close}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={close}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box>

                </Box>
            </Dialog>
        </div>
    );
}