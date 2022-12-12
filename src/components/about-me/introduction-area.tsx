import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function IntroductionArea() {

    return (
        <>
            <Box display="flex" sx={{ alignItems: "baseline" }}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>이름:</Typography>
                &nbsp;
                <Typography style={{ fontSize: 20 }}>김기협</Typography>
            </Box>
            <Box display="flex" sx={{ alignItems: "baseline" }}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>생년월일:</Typography>
                &nbsp;
                <Typography style={{ fontSize: 20 }}>97.02.22</Typography>
            </Box>
            <Box display="flex" sx={{ alignItems: "baseline" }}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>연락처:</Typography>
                &nbsp;
                <Typography style={{ fontSize: 20 }}>010-9090-1061</Typography>
            </Box>
            <Box display="flex" sx={{ alignItems: "baseline" }}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>이메일:</Typography>
                &nbsp;
                <Typography style={{ fontSize: 20 }}>kkig30@gmail.com</Typography>
            </Box>
            <Box display="flex" sx={{ alignItems: "baseline" }}>
                <Typography style={{ fontWeight: "bold", fontSize: 22 }}>주소:</Typography>
                &nbsp;
                <Typography style={{ fontSize: 20 }}>광주광역시 서구 금화로</Typography>
            </Box>
        </>
    )
}