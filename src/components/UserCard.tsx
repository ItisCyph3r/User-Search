import React from 'react';
import { GitHubUser } from '../types/GitHubUser';

interface UserCardProps {
  user: GitHubUser;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl overflow-hidden">
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-center items-center md:w-1/3 bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-400 rounded-full opacity-10 blur-md scale-110"></div>
          <img
            src={user.avatar_url}
            alt={`${user.login}'s avatar`}
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg object-cover relative z-10"
          />
        </div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-center">
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 truncate">{user.name || user.login}</h2>
          <div className="flex items-center gap-2 text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-base">@{user.login}</span>
          </div>
        </div>
        
        {user.bio && (
          <div className="mb-4 bg-gray-50 p-3 rounded-lg border-l-4 border-blue-300 italic text-gray-600 text-sm">
            "{user.bio}"
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg shadow-sm">
            <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">Repository</div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-800">{user.public_repos}</span>
              <span className="ml-1 text-xs text-gray-500">public</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg shadow-sm">
            <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1">Followers</div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-800">{user.followers}</span>
              <span className="ml-1 text-xs text-gray-500">people</span>
            </div>
          </div>
        </div>
        
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-5 rounded-lg shadow transition-all duration-300 hover:shadow-lg"
        >
          <span>View GitHub Profile</span>
          <svg 
            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default UserCard;