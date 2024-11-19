import React, { Component } from 'react'

class NavElement extends Component {

    constructor(props) {
        super(props);
        this.linkRef = React.createRef();

        this.handleHover = this.handleHover.bind(this);
        this.handleStopHover = this.handleStopHover.bind(this);
    }

    handleHover() {
        this.linkRef.current.style.textDecoration = 'underline'
    }

    handleStopHover() {
        this.linkRef.current.style.textDecoration = 'none'
    }

    render() {
        return(
            <>
                <div style = {navElementStyle}  onMouseEnter = {this.handleHover} onMouseLeave = {this.handleStopHover} ref = {this.linkRef}>

                    <div style = {edgeLine} />
                    {this.props.title}
                </div>
            </>
        )
    }
}

const navElementStyle = {
    width: '80%',
    height: '38px',

    margin: '10px auto 10px auto',

    fontFamily: 'Raleway',
    fontSize: '18px',
    fontWeight: '400',
    color: 'white',

    textAlign: 'left',
}

const edgeLine = {
    width: '100%',
    height: '1px',
    backgroundColor: '#f09592',
    margin: '0px auto 10px auto',
}


export default NavElement