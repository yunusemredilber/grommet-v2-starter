import React, {Component} from 'react';

import { connect } from 'react-redux';
// Grommet imports
import { Heading,Paragraph, Button } from "grommet";

// Action imports
import {setTest} from "../../actions/homepage-actions";

class HomePage extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <Heading level={3} margin="none">Hello from Home Page!</Heading>
                <br/>
                <Paragraph margin="none">
                data from homepage reducer (redux) =>
                {this.props.homepage.test.toString()}
                </Paragraph>
                <br/>
                <Paragraph margin="none">
                To change it
                    <Button style={{marginLeft:"10px"}}
                            label={"Press Me!"}
                            onClick={()=>this.props.setTest(!this.props.homepage.test)}/>
                </Paragraph>

            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setTest
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);