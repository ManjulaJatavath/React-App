import { Component } from 'react';

type Message = {
  id: number;
  sender: string;
  text: string;
  starred: boolean;
  product:string;
};

type Props = {
  messages: Message[];
};

type State = {
  messages: Message[];
};

export class MessageList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: props.messages,
    };
  }

  toggleStarredMessage = (id: number) => {
    this.setState((prevState) => ({
      messages: prevState.messages.map((message) =>
        message.id === id ? { ...message, starred: !message.starred } : message),
    }));
  };

  render() {
    return (
      <div className="p-6 bg-gray-100 rounded-lg mx-auto">
            <h1 className='p-4 mb-2 bg-white rounded-lg shadow-sm text-center'>
                Users Message List
            </h1>
        <div className="grid grid-cols-5 gap-4 p-2 bg-white text-gray-800 font-bold rounded-t-lg mb-2">
          <span className="text-center">User Name</span>
          <span className="text-center">Product</span>
          <span className="text-center">Text</span>
          <span className="text-center">Star</span>
          <span className="text-center">Unstar</span>
        </div>
        <ul className="list-none p-0">
          {this.state.messages.map((message) => (
            <li
              key={message.id}
              className="p-4 bg-white rounded-md shadow-md mb-4 flex items-center justify-between"
            >
              <span className={`font-bold ${message.starred ? 'text-pink-500' : 'text-gray-600'}`}>
                {message.sender}
              </span>
              <span className={`font-bold ${message.starred ? 'text-purple-500' : 'text-gray-600'}`}>
                {message.product}
              </span>
              <span className="mx-4">{message.text}</span>
              <span className={`font-bold ${message.starred ? 'text-yellow-500' : 'text-gray-400'}`}>
              {message.starred ? '★' : '☆'}
              </span>
              <button
                onClick={() => this.toggleStarredMessage(message.id)}
                className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                {message.starred ? 'Unstar' : 'Star'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessageList;




