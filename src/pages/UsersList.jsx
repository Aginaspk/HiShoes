import React, { useEffect, useState } from 'react'
import api from '../api/get'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL, faUser } from '@fortawesome/free-solid-svg-icons'
import ViewUser from './ViewUser';
import { Link } from 'react-router-dom';


function UsersList() {

    const [users, setUsers] = useState([]);
    const [viewUser, setViewUser] = useState(false);
    const [id, setId] = useState(null)

    useEffect(() => {
        api.get(`users`)
            .then((response) => {
                const users = response.data;
                setUsers(users);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const userBlock = async (id) => {
        try {
            const user = users.find((u) => u.id === id);
            if (!user) {
                return;
            }
            const updatedUser = { ...user, isBlocked: !user.isBlocked };
            const response = await api.patch(`users/${id}`, updatedUser);
            setUsers((prevUsers) =>
                prevUsers.map((u) => (u.id === id ? response.data : u))
            );
            alert(
                `User ${updatedUser.isBlocked ? "blocked" : "unblocked"} successfully`
            );
        } catch (err) {
            console.error("Error blocking/unblocking user:", err);
        }
    };

    const viewuser = (id) => {
        setId(id);
        setViewUser(true);
    }
    const closeUser = () =>{
        setViewUser(false)
    }

    return (
        <div className={`relative `}>
            {viewUser ? <ViewUser id={id} closeUser={closeUser} /> : <h1></h1>}


            <div className={`overflow-x-auto 2xl:px-5 py-20 2xl:ml-[20%] ${viewUser ? "blur-lg" : "blur-none"}`}>
                <h1 className="text-4xl 2xl:mt-14 mb-10">Users</h1>

                <table className="table border-2 border-black w-full bg-[#f6f6f6]">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-[#d6d1d1] text-black">
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {users.map((item, index) => (

                            <tr key={index} className="border-y-2">
                                <td className="py-3">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <FontAwesomeIcon icon={faUser} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {item.name} {item.isBlocked ? "(Blocked)" : ""}
                                            </div>
                                            <div className="text-sm opacity-50">India</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center py-3">{item.role}</td>
                                <td className="text-center">{item.email}</td>
                                <td className="flex flex-col py-3">
                                    <button
                                        className="btn btn-ghost btn-xs underline py-1"
                                        onClick={() => viewuser(item.id)}
                                    >
                                        Details
                                    </button>
                                    <button
                                        className="btn btn-ghost btn-xs underline py-1"
                                        onClick={() => userBlock(item.id)}
                                    >
                                        {item.isBlocked ? "Unblock" : "Block"}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersList