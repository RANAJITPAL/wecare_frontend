
import { AppBar, Card, CardContent, Toolbar, Typography } from '@material-ui/core';
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
            <div>
                <div>
                <Card variant = 'elevation' className = 'card_style'>
                    <CardContent>
                        <text>card 1</text>
                    </CardContent>
                </Card>
                </div>
                <div>
                <Card variant = 'elevation' className = 'card_style'>
                    <CardContent>
                        <text>card 2</text>
                    </CardContent>
                </Card>
                </div>
            </div>
        </div>
    );
}

export default HomePage;