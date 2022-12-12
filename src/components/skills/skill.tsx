import { skillType } from ".";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function Skill({ item }: { item: Array<skillType> }) {
    return (
        <Grid xs={4} sm={4} md={4} sx={{ height: "fit-content" }}>
            <Paper elevation={5} sx={{ p: 1 }}>
                {item.map((one) => (
                    <Box>
                        <img src={one.imgUrl} alt={one.title} width="50%" height="50%" />
                    </Box>
                ))}
            </Paper>
        </Grid>
    );
}