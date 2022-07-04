'use strict'

const e = React.createElement;
const main = document.querySelector('.main');

class WriteThis extends React.Component{
    render(){
        return <h1>This is my React App</h1>
    }
}

ReactDOM.render(<WriteThis />, main);
