import  { useState } from 'react';

const UserForm = () => {
    const [UserData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        gender: '',
        password: '',
        confirmPassword: '',
    });

    const handleOnChange = (event:any) => {
        const { name, value } = event.target;
        setUserData({
            ...UserData,
            [name]: value,
        });
    };

    const validateFormData = () => {
        const namePattern = /^[A-Za-z]+$/;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail)\.com$/;
        const mobilePattern = /^[6-9]\d{9}$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const { firstname, email, mobile, password } = UserData;

        if (!namePattern.test(firstname)) {
            alert("Invalid first name. Only letters are allowed.");
            return false;
        }

        if (!emailPattern.test(email)) {
            alert("Invalid email. Only gmail are allowed.");
            return false;
        }

        if (!mobilePattern.test(mobile)) {
            alert("Invalid mobile number. It must start with 6-9 and be 10 digits long.");
            return false;
        }

        if (!passwordPattern.test(password)) {
            alert("Invalid password. It must be at least 8 characters long, contain at least one uppercase letter, 1 num, and special character.");
            return false;
        }
        return true;
    };

    // const handleSubmit = (event:any) => {
    //     event.preventDefault();
    //     if (validateFormData()) {
    //         const jsonData = JSON.stringify(UserData);
    //         localStorage.setItem('usersData', jsonData);
    //         console.log("User Submitted Data:", jsonData);
    //         alert('Registration successful!');
    //     }
    // };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (validateFormData()) {
            const UsersData = JSON.parse(localStorage.getItem('users') || '[]');
            UsersData.push(UserData);
            localStorage.setItem('users', JSON.stringify(UsersData));
            console.log("User Submitted Data:", JSON.stringify(UsersData));
            alert('Registration successful!');
            setUserData({
                firstname: '',
                lastname: '',
                email: '',
                mobile: '',
                gender: '',
                password: '',
                confirmPassword: '',
            });
        }
    };


  return (
<div className="flex justify-center items-center p-10 bg-blue-200 min-h-screen">
  <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Registration Form</h2>
    <form id="registrationForm" className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname" className="block text-gray-700 font-semibold">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={UserData.firstname}
          name="firstname"
          onChange={handleOnChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label htmlFor="lastname" className="block text-gray-700 font-semibold">Last Name:</label>
        <input
          type="text"
          id="lastname" 
          value={UserData.lastname}
          name="lastname"
          onChange={handleOnChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
        <input
          type="email"
          id="email" 
          value={UserData.email}
          name="email"
          onChange={handleOnChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block text-gray-700 font-semibold">Mobile:</label>
        <input
          type="tel"
          id="mobile" 
          value={UserData.mobile}
          name="mobile"
          onChange={handleOnChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label htmlFor="gender" className="block text-gray-700 font-semibold">Gender:</label>
        <select
          id="gender" 
          value={UserData.gender}
          name="gender"
          required
          onChange={handleOnChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
        <input
          type="password"
          id="password" 
          value={UserData.password}
          name="password"
          onChange={handleOnChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword" 
          value={UserData.confirmPassword}
          name="confirmPassword"
          onChange={handleOnChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-purple-800 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 pb-10"
      >
        Submit
      </button>
    </form>
  </div>
</div>
  )
}

export default UserForm
