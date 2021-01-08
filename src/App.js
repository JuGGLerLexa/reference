import React, {Component} from 'react';


class App extends Component {

    input1 = React.createRef();

    render() {
        return (
            <div>
                <input ref={this.input1} onInput={this.readInputValue}/>
            </div>
        );

    }
    readInputValue = () => {
        console.log(this.input1.current.value);
    };

}

export default App;