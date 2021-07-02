import React, { Component } from 'react';

class EyesOnMe extends Component {
    render() {

        onFocus = () => console.log('Good!')

        onblur = () => console.log('Hey! Eyes on me!')

        return (
            <div>
                <button></button>
            </div>
        );
    }
}

export default EyesOnMe;
