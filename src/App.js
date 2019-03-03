/*
* Yunus Emre Dilber
* https://github.com/yunusemredilber
* */

import React, { Component } from 'react';
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
import AppBar from "./components/AppBar";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
// grommet theme customize
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
  state = {
    showSidebar: false/*right*/,sidebar:true/*left*/
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
                    onClick={() => this.setState({ sidebar: !this.state.sidebar })}
                />
                {/*-----------Header---------------*/}
                <Heading level='3' margin='none'>Grommet.v2 Starter</Heading>
                <Button
                icon={<Notification />}
                onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
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
                      {["First", "Second", "Third"].map(name => (
                          <Button key={name} href="#" hoverIndicator>
                            <Box pad={{ horizontal: "medium", vertical: "small" }}>
                              <Text>{name}</Text>
                            </Box>
                          </Button>
                      ))}
                    </Box>
                )}
                <Box flex align='center' justify='center'>
                  {/*Add new pages here for Route*/}
                  {/*-------------------------------*/}
                  <Switch>
                    <Route path={"/"} exact /*strict*/ component={HomePage}/>
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
                        onClick={() => this.setState({ showSidebar: false })}
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
