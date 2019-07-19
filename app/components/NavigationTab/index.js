/**
*
* NavigationTab
*
*/

import React from 'react';
import { compose } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './style.scss';
import styles from './materialStyle';

class NavigationTab extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    state = {
        pageValue: 0,
    }

    tabContent = (pageValue) => (
        <Typography component="div">
            {this.props.tabs[pageValue].description}
            {this.props.tabs[pageValue].content}
        </Typography>
    );

    handleChange = (event, newValue) => {
        this.setState({ pageValue: newValue });
    }

    renderTopBar = () => (
        <div>
            <AppBar position="static" className={this.props.classes.topBar} style={{ marginBottom: 16 }}>
                <Toolbar>
                    <Container style={{ padding: 0 }}>
                        <Tabs
                            value={this.state.pageValue}
                            onChange={this.handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            {
                                this.props.tabs.map((tab, index) => (
                                    <Tab
                                        key={index}
                                        label={<Typography>{tab.title}</Typography>}
                                        style={{ textTransform: 'none', margin: 0, padding: 0 }}
                                    />
                                ))
                            }
                        </Tabs>
                    </Container>
                </Toolbar>
            </AppBar>
            { this.tabContent(this.state.pageValue) }
        </div>
    )

    render() {
        return (
            <div>
                {this.renderTopBar()}
            </div>
        );
    }
}

NavigationTab.propTypes = {

};

export default compose(
    withStyles(styles),
)(NavigationTab);
