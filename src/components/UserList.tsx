import { Component } from 'react';



type User = {
    id: number;
    name: string;
    age: number;
  };


type Props = {
    users: User[];
};

class Userlist extends Component<Props> {
  render() {
    const updatedUsers = this.props.users.map((user) => ({
      ...user,
      isAdult: user.age >= 18,
    }));

    return (
        <div className="p-6 bg-gray-50 rounded-lg shadow-md">
          <ul className="list-none p-0">
            {updatedUsers.map((user) => (
              <li
                key={user.id}
                className="p-4 mb-2 bg-white rounded-lg shadow-sm flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-800">{user.name}</span>
                <span className={`text-sm font-semibold ${user.isAdult ? 'text-green-600' : 'text-red-600'}`}>
                  {user.isAdult ? 'Adult' : 'Minor'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

export default Userlist;
