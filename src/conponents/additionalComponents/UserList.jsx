import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://entri-news-movie-server.onrender.com/users');
                if (Array.isArray(response.data)) {
                    setUserList(response.data);
                } else {
                    console.error('Data format is not an array:', response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {Array.isArray(userList) && userList.length > 0 ? (
                userList.map((user, index) => (
                    <div key={index}>
                        <p>{user.username}</p>
                        

                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

export default UserList;
