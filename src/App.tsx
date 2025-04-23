import { useState, useEffect, useCallback } from 'react'
import { GitHubUser } from './types/GitHubUser'
import { useDebounce } from './hooks/useDebounce'
import { fetchGitHubUser } from './api/github'
import SearchForm from './components/SearchForm'
import UserCard from './components/UserCard'
import ErrorMessage from './components/ErrorMessage'
import LoadingSpinner from './components/LoadingSpinner'
import './App.css'

function App() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedUsername = useDebounce(username, 500);

  const fetchUser = useCallback(async () => {
    if (!debouncedUsername.trim()) {
      setUser(null);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchGitHubUser(debouncedUsername);
      setUser(data);
    } catch (error) {
      setUser(null);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [debouncedUsername]);

  useEffect(() => {
    fetchUser();
  }, [debouncedUsername, fetchUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <div className="h-screen bg-[#242424] flex flex-col items-center justify-center px-2">
      <header className="w-full max-w-xl mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-2 tracking-tight drop-shadow">GitHub User Search</h1>
        <p className="text-gray-300 text-lg">Enter a GitHub username to view their profile</p>
      </header>

      <main className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
        <SearchForm
          username={username}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
        />

        {loading && <LoadingSpinner />}

        {error && <ErrorMessage error={error} />}

        {user && !loading && !error && (
          <div className="mt-6">
            <UserCard user={user} />
          </div>
        )}

        {!user && !loading && !error && username && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-lg mt-6 text-center">
            <p>No user found with username "<span className="font-semibold">{username}</span>"</p>
          </div>
        )}

        {!username && !loading && !error && !user && (
          <div className="text-center py-10 text-gray-800 text-lg select-none">
            <p>Type a GitHub username above to see their profile information.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App
