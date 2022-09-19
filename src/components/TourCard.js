import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material'
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const TourCards = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={5}>
                <img src="https://www.valleywestvets.com/sites/default/files/interesting-cat-facts.jpg"
                    alt="cat"
                    className="img" />
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">
                        Immerse into the Falls
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignment: "center",
                        }}>
                        <AccessTime sx={{ width: 12.5 }} />
                        {/* Add icons */}
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignment: "center",
                        }}>
                        <StyledRating
                            name="customized-color"
                            defaultValue={0}
                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                            precision={0.5}
                            size="small"
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        />
                    </Box>
                </Box>

            </Paper>
        </Grid>
    );
};

export default TourCards