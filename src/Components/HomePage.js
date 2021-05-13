
import { AppBar, Card, CardContent, Toolbar, Typography, Box} from '@material-ui/core';
import UserLogin from './UserLogin';

import './HomePage.css';
function HomePage() {
    return (
        <div>
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h6">
                            WeCare
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ padding: '35px' }}>
                <Box display="flex" flexDirection="row" justifyContent="center" >
                    <div style={{ padding: '25px' }}>
                        <Card variant='elevation' className='card_style' m={10} p={10}>
                            <CardContent>
                                <Typography variant="h6" align = "center">
                                    User Login
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <div>
                                    <UserLogin/>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div style={{ padding: '25px' }}>
                        <Card variant='elevation' className='card_style' m={10} p={10} >
                            <CardContent>
                                <text>card 2</text>
                            </CardContent>
                        </Card>
                    </div>
                </Box>
            </div>
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h6">
                            footer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default HomePage;