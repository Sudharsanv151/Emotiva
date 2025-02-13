import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Plus, BookOpen, Edit } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Journals = () => {
  const { user } = useAuth();
  const [journals, setJournals] = useState([]);
  const [newJournal, setNewJournal] = useState({
    title: '',
    content: '',
  });
  const [message, setMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [selectedJournal, setSelectedJournal] = useState(null);

  const fetchJournals = async () => {
    try {
      const response = await axios.post('https://emotiva-server.onrender.com/journals/get', { email: user.email });
      setJournals(response.data.journals);
    } catch (error) {
      console.error('Error fetching journals:', error);
      setMessage("Error fetching journals.");
    }
  };

  const addJournal = async () => {
    if (!user || !user.email) {
      setMessage("Please log in first.");
      return;
    }

    const journalData = {
      email: user.email,
      title: newJournal.title,
      content: newJournal.content,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post('https://emotiva-server.onrender.com/journals/add', journalData);
      setShowSuccessPopup(true);
      setNewJournal({ title: '', content: '' });
      fetchJournals();
    } catch (error) {
      console.error('Error adding journal:', error.response ? error.response.data : error.message);
      setMessage('Error adding journal.');
    }
  };

  const deleteJournal = async (journalId) => {
    try {
      await axios.delete(`https://emotiva-server.onrender.com/journals/delete/${journalId}`);
      fetchJournals();
    } catch (error) {
      console.error('Error deleting journal:', error.response ? error.response.data : error.message);
      setMessage('Error deleting journal.');
    }
  };

  const selectJournalForEdit = (journal) => {
    setSelectedJournal(journal);
    setNewJournal({ title: journal.title, content: journal.content });
  };

  const updateJournal = async () => {
    if (!selectedJournal) return;

    try {
      await axios.put(`https://emotiva-server.onrender.com/journals/update/${selectedJournal._id}`, {
        title: newJournal.title,
        content: newJournal.content,
      });
      fetchJournals();
      setSelectedJournal(null);
      setNewJournal({ title: '', content: '' });
    } catch (error) {
      console.error('Error updating journal:', error);
      setMessage('Error updating journal.');
    }
  };

  useEffect(() => {
    if (user) {
      fetchJournals();
    }
  }, [user]);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-96 md:w-full max-w-md ring-1 ring-slate-300 bg-slate-800/40 p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold text-center text-white mb-6 flex items-center justify-center">
          <BookOpen className="mr-3 text-blue-400" />
          Your Journals
        </h1>

        <div className="mb-6">
          <input
            type="text"
            value={newJournal.title}
            onChange={(e) => setNewJournal({ ...newJournal, title: e.target.value })}
            placeholder="Journal Title"
            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <textarea
            value={newJournal.content}
            onChange={(e) => setNewJournal({ ...newJournal, content: e.target.value })}
            placeholder="Journal Content"
            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 mb-4"
          />
          <div className="flex space-x-2">
            <button
              onClick={selectedJournal ? updateJournal : addJournal}
              className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <Plus className="mr-2" />
              {selectedJournal ? 'Update Journal' : 'Add Journal'}
            </button>
            {selectedJournal && (
              <button
                onClick={() => {
                  setSelectedJournal(null);
                  setNewJournal({ title: '', content: '' });
                }}
                className="text-white/70 hover:text-white transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {message && <p className="text-red-500 mb-4 text-center">{message}</p>}

        <h2 className="text-xl font-bold mb-4 text-white">Previous Journals</h2>
        <div className="space-y-4">
          {journals.map((journal) => (
            <div
              key={journal._id}
              className="bg-gray-700/50 backdrop-blur-md rounded-lg p-4 flex justify-between items-start hover:bg-gray-700/70 transition"
            >
              <div className="flex-grow pr-4">
                <h3 className="text-lg font-semibold text-white mb-2">{journal.title}</h3>
                <p className="text-white/80 mb-2 line-clamp-2">{journal.content}</p>
                <small className="text-white/50">
                  {new Date(journal.timestamp).toLocaleString()}
                </small>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => selectJournalForEdit(journal)}
                  className="text-blue-400 hover:text-blue-300 transition"
                  title="Edit Journal"
                >
                  <Edit size={20} />
                </button>
                <button
                  onClick={() => deleteJournal(journal._id)}
                  className="text-red-500 hover:text-red-400 transition"
                  title="Delete Journal"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white/20 backdrop-blur-lg p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold text-green-400 mb-4">Journal Added Successfully!</h2>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journals;