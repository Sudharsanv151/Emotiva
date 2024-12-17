import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import axios from 'axios';

const Profile = () => {
    const { user } = useAuth();
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        bio: '',
    });
    const [editing, setEditing] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setProfile(prevProfile => ({
                ...prevProfile,
                name: user.name || '',
                email: user.email || ''
            }));

            fetchProfile();
        }
    }, [user]);

    const fetchProfile = async () => {
        if (!user || !user.email) {
            console.error("No user email available");
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            const response = await axios.get(`http://localhost:5000/api/profile/${user.email}`);
           
            setProfile(prevProfile => ({
                ...prevProfile,
                ...response.data
            }));
            
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching profile:", error);
            
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else if (error.request) {
                setErrorMessage('No response from server');
            } else {
                setErrorMessage('Error setting up the request');
            }
            
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSave = async () => {
        setSuccessMessage('');
        setErrorMessage('');
        
        try {
            const response = await axios.put(`http://localhost:5000/user/update/${user.email}`, profile);
            
            setSuccessMessage('Profile updated successfully!');
            setEditing(false);
        } catch (error) {
            console.error("Error updating profile:", error);
          
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Failed to update profile');
            } else if (error.request) {
                setErrorMessage('No response from server');
            } else {
                setErrorMessage('Error setting up the request');
            }
        }
    };
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-white">Loading profile...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative w-[30rem] flex flex-col space-y-6 border-2 border-slate-400 bg-slate-800/60 p-10 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Profile</h1>

                {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
                {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            editing ? 'bg-white border-blue-500' : 'bg-gray-200 border-gray-300'
                        }`}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        disabled
                        className="w-full px-4 py-2 border rounded-lg bg-gray-200 border-gray-300 cursor-not-allowed"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone || ''}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            editing ? 'bg-white border-blue-500' : 'bg-gray-200 border-gray-300'
                        }`}
                        placeholder={!profile.phone && editing ? 'Add your phone number' : ''}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={profile.address || ''}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            editing ? 'bg-white border-blue-500' : 'bg-gray-200 border-gray-300'
                        }`}
                        placeholder={!profile.address && editing ? 'Add your address' : ''}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2">Bio</label>
                    <textarea
                        name="bio"
                        value={profile.bio || ''}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            editing ? 'bg-white border-blue-500' : 'bg-gray-200 border-gray-300'
                        }`}
                        placeholder={!profile.bio && editing ? 'Add a bio about yourself' : ''}
                    ></textarea>
                </div>

                <div className="flex justify-between">
                    {editing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditing(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setEditing(true)}
                            className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 w-full"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;