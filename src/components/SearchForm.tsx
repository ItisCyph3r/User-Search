import React from 'react';

interface SearchFormProps {
  username: string;
  setUsername: (username: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ username, setUsername, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="mb-4">
    <div className="flex gap-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="flex-grow p-3 md:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none text-lg bg-white shadow-sm transition text-gray-900"
        autoFocus
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-lg shadow"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
