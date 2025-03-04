import * as React from 'react';
import ChannelLink from './TeamSidebar/ChannelLink';

const TeamSidebar : React.FC<any> = ({ team }) => {
  return (
    <section className="team-sidebar h-full bg-indigo-800 text-purple-300 flex-none md:w-64 sm:w-48 pb-6 flex flex-col">
      <header className="team-sidebar__header text-white mb-2 mt-3 px-4 flex justify-between">
        <div className="flex-auto">
          <h1 className="team-sidebar__team-name font-semibold text-xl leading-tight mt-2 mb-1 truncate">
            {team.name}
          </h1>

          <div className="team-sidebar__current-user-indicator flex items-center mb-6">
            <svg
              aria-hidden="true"
              className="h-2 w-2 fill-current text-green-500 mr-2"
              viewBox="0 0 20 20"
            >
              <circle cx="10" cy="10" r="10"></circle>
            </svg>
            <span className="team-sidebar__current-user-name text-white opacity-75 text-sm">
              Chris User
            </span>
          </div>
        </div>

        <button disabled>
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-current text-white opacity-25 hidden sm:block"
            viewBox="0 0 20 20"
          >
            <path
              d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
      </header>

      <nav className="mb-4 flex-1 team-sidebar__channels-list flex flex-col">
        <div className="px-4 mb-2 text-white flex justify-between items-center">
          <h2 className="opacity-75 text-lg">Channels</h2>

          <button
            className="team-sidebar__join-channel-button text-white"
            aria-label="join a new channel"
            role="button"
          >
            <svg
              aria-hidden="true"
              className="fill-current h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path>
            </svg>
          </button>
        </div>
        {team.channels.map((ch:any) => (
          <ChannelLink
            key={ch.id}
            to={`/team/${team.id}/channel/${ch.id}`}
            channel={ch}
          />
        ))}
      </nav>
      <footer className="mx-4 text-white">
        <button className="text-white rounded bg-gray-500 hover:bg-red-800 p-2 team-sidebar__logout-button">
          Logout
        </button>
      </footer>
    </section>
  );
};

export default TeamSidebar;
