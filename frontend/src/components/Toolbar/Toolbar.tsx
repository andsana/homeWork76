import {AppBar, Link, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const AppToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <Link href="/" color="inherit" underline="none">
                        Chat
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppToolbar;
