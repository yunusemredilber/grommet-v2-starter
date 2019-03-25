/*
* Yunus Emre Dilber
* https://github.com/yunusemredilber
* */

import React, { Component } from 'react';
import {BrowserRouter as Router,
  Route,
  Switch,
  Link} from "react-router-dom";

// Grommet Imports
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext, Text,
} from 'grommet';
import { FormClose, Notification,Menu,Close } from 'grommet-icons';

// Component Imports
import AppBar from "./components/AppBar";


// Page Imports
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import FirstPage from "./components/pages/FirstPage";

// Grommet Theme Customize
const theme = {
  global: {
    colors: {
      brand: '#7D4CDB',/*main color code*/
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


class App extends Component {

  constructor(props) {
    super(props);
    this.sidebarToggle = this.sidebarToggle.bind(this);
    this.showSidebarToggle = this.showSidebarToggle.bind(this);
    this.showSidebarClose = this.showSidebarClose.bind(this);

  }

  state = {
    showSidebar: false/*right*/,sidebar:false/*left*/
  };

  sidebarToggle(){
    this.setState({ sidebar: !this.state.sidebar });
  };

  showSidebarToggle(){
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  showSidebarClose(){
    this.setState({ showSidebar: false });
  };

  render() {
    const { showSidebar,sidebar } = this.state;
    return (
        <Router>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Button
                    icon={(this.state.sidebar)?<Close/>:<Menu />}
                    onClick={this.sidebarToggle}
                />
                {/*-----------Header---------------*/}
                <Heading level='3' margin='none'>Grommet.v2 Starter</Heading>
                <Button
                icon={<Notification />}
                onClick={this.showSidebarToggle}
                />
              </AppBar>

              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                {sidebar && (
                    <Box
                        gridArea="sidebar"
                        background="brand"
                        width="small"
                        animation={[
                          { type: "fadeIn", duration: 300 },
                          { type: "slideRight", size: "xlarge", duration: 150 }
                        ]}
                    >
                      {/*Nav Buttons*/}
                      {[{src:"",name:"Home"}, {src:"first",name:"First"},].map(link => (
                          <Button key={link.src}  hoverIndicator>
                            <Link to={"/"+link.src} style={{all:"unset"}}>
                            <Box pad={{ horizontal: "medium", vertical: "small" }}>
                              <Text>{link.name}</Text>
                            </Box>
                            </Link>
                          </Button>
                      ))}
                    </Box>
                )}
                <Box flex align='center' justify='center'>
                  {/*Add new pages here for Route*/}
                  {/*-------------------------------*/}
                  <Switch>
                    <Route path={"/"} exact /*strict*/ component={HomePage}/>
                    <Route path={"/first"} exact /*strict*/ component={FirstPage}/>
                    <Route exact /*strict*/ component={NotFoundPage}/>
                  </Switch>
                  {/*-------------------------------*/}
                </Box>

                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={this.showSidebarClose}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>


          )}


        </ResponsiveContext.Consumer>

      </Grommet>
        </Router>
    );
  }
}

export default App;
