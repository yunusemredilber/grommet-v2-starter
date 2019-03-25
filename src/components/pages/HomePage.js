import React, {Component} from 'react';
import { connect } from 'react-redux';
// Grommet Imports
import { Heading,Paragraph, Button } from "grommet";

// Action Imports
import {setTest} from "../../actions/homepage-actions";

class HomePage extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.homepage.test !== nextProps.homepage.test;
    };

    render() {
        const style_Button = {marginLeft:"10px"};
        return (
            <div>
                <Heading level={3} margin="none">Hello from Home Page!</Heading>
                <br/>
                <Paragraph margin="none">
                {"Data from homepage reducer (redux) =>"}
                {this.props.homepage.test.toString()}
                </Paragraph>
                <br/>
                <Paragraph margin="none">
                {"To change it"}
                    <Button style={style_Button}
                            label={"Press Me!"}
                            onClick={()=>this.props.setTest(!this.props.homepage.test)}/>
                </Paragraph>

            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {...state,...props};
};

const mapDispatchToProps = {
    setTest
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);