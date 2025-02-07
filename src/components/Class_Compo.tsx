import { Component } from 'react';


interface MyComponentState1 {
  inputValue: string;
}

class MyComponent1 extends Component<{}, MyComponentState1> {
  constructor(props: {}) {
    super(props);
    this.state = { 
        inputValue: '' 
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleChange} 
        />
        <h1>{this.state.inputValue}</h1>
      </div>
    );
  }
}

export  {MyComponent1};


interface MyComponentState {
  color: string;
  msg: string;
}

class MyComponent extends Component<{}, MyComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = { 
        color: 'blue',
        msg: 'Welcome to my page, please click on the button below'
    };
  }

  handleClick = () => {
    this.setState({
      color: this.state.color === 'blue' ? 'green' : 'blue',
      msg: 'Thanks for your time'
    });
  };


  render() {
    return (
      <div className={`p-4 min-h-screen flex flex-col items-center justify-center ${this.state.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'}`}>
        <h1 className="text-white text-2xl font-bold mb-4">{this.state.msg}</h1>
        <button 
          className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition duration-300" 
          onClick={this.handleClick}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default MyComponent;









