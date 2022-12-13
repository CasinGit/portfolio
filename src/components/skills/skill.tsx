import { skillType } from ".";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ImageList, ImageListItem, Typography } from "@mui/material";

export default function Skill({ item, header }: { item: Array<skillType>, header: string }) {
    return (
        <Grid xs={4} sm={4} md={4} sx={{ pb: 1 }}>
            <Paper elevation={5} sx={{ p: 2, m: 1, textAlign: "center" }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {header}
                </Typography>
                <ImageList variant="masonry" gap={20}>
                    {item.map((item) => (
                        <ImageListItem key={item.title}>
                            <img
                                src={item.imgUrl}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: "10px" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Paper>
        </Grid>
    );
}