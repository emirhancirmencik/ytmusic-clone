const searchIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255,255,255,0.5)"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path
        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        fill="currentColor"
      />
    </svg>
  );
};

const settingsIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="currentColor"
      />
    </svg>
  );
};

const chromecastIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255,255,255,0.5)"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path
        d="M22,20h-8v-1h7V5H3v3H2V4h20V20z M2,17.32V20h2.73C4.73,18.52,3.51,17.32,2,17.32z M2,13.75v1.79c2.51,0,4.55,2,4.55,4.46 h1.82C8.36,16.55,5.52,13.75,2,13.75z M2,10.18v1.79c4.52,0,8.18,3.6,8.18,8.03H12C12,14.57,7.52,10.18,2,10.18z"
        fill="currentColor"
      />
    </svg>
  );
};

const logo = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizex}
      height={sizey}
      viewBox={`0 0 ${sizex} ${sizey}`}
      fill="none"
    >
      <ellipse cx="12.18" cy="12" rx="12.18" ry="12" fill="red" />
      <ellipse
        cx="12.18"
        cy="12"
        rx="7.308"
        ry="7.2"
        fill="red"
        stroke="#fff"
        strokeWidth="1.2"
      />
      <path
        d="M9.744 15.545l6.327-3.544-6.327-3.546v7.09zM37.433 9.642c-.579 2.853-1.019 6.336-1.25 7.774h-.163c-.187-1.482-.627-4.942-1.227-7.75L33.31 2.677h-4.52v18.85h2.803V5.987l.277 1.451 2.85 14.086h2.804l2.803-14.086.3-1.459v15.547h2.804V2.676h-4.563l-1.435 6.966zM51.01 18.696c-.256.517-.81.876-1.368.876-.648 0-.904-.494-.904-1.706V7.754H45.54v10.29c0 2.54.856 3.706 2.758 3.706 1.296 0 2.338-.562 3.058-1.909h.07l.277 1.684h2.502V7.755h-3.198v10.94h.003zM60.392 13.19c-1.043-.742-1.691-1.236-1.691-2.314 0-.763.37-1.19 1.25-1.19.905 0 1.206.605 1.227 2.674l2.689-.111c.208-3.346-.928-4.74-3.87-4.74-2.733 0-4.078 1.19-4.078 3.638 0 2.224 1.113 3.235 2.92 4.562 1.553 1.169 2.457 1.82 2.457 2.764 0 .72-.464 1.213-1.275 1.213-.95 0-1.507-.877-1.365-2.405l-2.71.044c-.419 2.852.766 4.515 3.915 4.515 2.758 0 4.195-1.236 4.195-3.706-.003-2.247-1.16-3.147-3.664-4.944zM68.872 7.754h-3.059v13.77h3.06V7.755zM67.365 2.316c-1.18 0-1.738.427-1.738 1.911 0 1.528.554 1.909 1.739 1.909 1.205 0 1.738-.383 1.738-1.909 0-1.414-.533-1.911-1.739-1.911zM79.158 16.56l-2.803-.135c0 2.426-.277 3.212-1.226 3.212-.95 0-1.113-.877-1.113-3.73v-2.67c0-2.765.187-3.639 1.137-3.639.88 0 1.112.83 1.112 3.393l2.778-.178c.187-2.134-.093-3.595-.949-4.425-.627-.608-1.576-.897-2.896-.897-3.104 0-4.379 1.618-4.379 6.154v1.932c0 4.673 1.088 6.178 4.264 6.178 1.344 0 2.27-.27 2.896-.854.902-.814 1.249-2.205 1.18-4.341z"
        fill="#fff"
      />
    </svg>
  );
};

const miniLogo = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizex}
      height={sizey}
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill="red" />
      <ellipse
        cx="12.18"
        cy="12"
        rx="7.308"
        ry="7.2"
        fill="red"
        stroke="#fff"
        stroke-width="1.2"
      />
      <path d="M9.744 15.545l6.327-3.544-6.327-3.546v7.09z" fill="#fff" />
    </svg>
  );
};
const prevIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255,255,255,0.5)"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
        fill="currentColor"
      />
    </svg>
  );
};

const castIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255,255,255,0.5)"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M16.94 6.9l-1.4 1.46C16.44 9.3 17 10.58 17 12s-.58 2.7-1.48 3.64l1.4 1.45C18.22 15.74 19 13.94 19 12s-.8-3.8-2.06-5.1zM23 12c0-3.12-1.23-5.95-3.23-8l-1.4 1.45C19.97 7.13 21 9.45 21 12s-1 4.9-2.64 6.55l1.4 1.45c2-2.04 3.24-4.87 3.24-8zM7.06 17.1l1.4-1.46C7.56 14.7 7 13.42 7 12s.6-2.7 1.5-3.64L7.08 6.9C5.78 8.2 5 10 5 12s.8 3.8 2.06 5.1zM1 12c0 3.12 1.23 5.95 3.23 8l1.4-1.45C4.03 16.87 3 14.55 3 12s1-4.9 2.64-6.55L4.24 4C2.24 6.04 1 8.87 1 12zm9-3.32v6.63l5-3.3-5-3.3z" />
    </svg>
  );
};

const likeIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="rgb(255,255,255,0.5)"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M14.9 3H6c-.8 0-1.5.5-1.8 1.2l-3 7.3c-.1.2-.2.4-.2.7v2c0 1.1.9 2 2 2h6.3l-1 4.7v.3c0 .4.2.8.4 1.1.6.7 1.5.7 2.1.1l5.5-5.7c.4-.4.6-.9.6-1.4V5c0-1.1-.9-2-2-2zm-.2 12.6l-3.5 3.6c-.2.2-.5 0-.4-.2l1-4.6H4c-.6 0-1-.5-1-1v-1.1l2.7-6.6c.2-.5.6-.7 1-.7H14c.5 0 1 .5 1 1v8.8c-.1.3-.2.6-.3.8zM19 3h4v12h-4V3z" />
    </svg>
  );
};

const playIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

const homeIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
};

const exploreIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z" />
      <path d="M0 0h24v24H0z" fill="none"></path>
    </svg>
  );
};

const libraryIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
    </svg>
  );
};

const shuffleIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.808 4.655l2.069 1.978h-.527c-1.656 0-3.312.68-4.458 1.814L12.797 9.75l1.179 1.246 1.317-1.527c.764-.794 1.91-1.247 3.057-1.247h.55l-2.07 2.014 1.178 1.179 4.005-3.993-4.026-3.945-1.178 1.179zm1.974 10.998l-1.974-1.888 1.18-1.179 4.024 3.945-4.004 3.993-1.178-1.179 1.954-1.901h-.434c-1.656 0-3.312-.625-4.458-1.667L8.242 9.8C7.35 9.071 6.204 8.55 4.93 8.55H2l.006-1.794 2.965.003c1.784 0 3.312.521 4.459 1.563l5.904 6.185c.765.73 1.911 1.146 3.058 1.146h.39zm-9.02-2.092l-1.52 1.394c-.892.793-2.038 1.36-3.312 1.36H2v1.588h2.93c1.783 0 3.312-.567 4.459-1.701l1.537-1.396-1.164-1.245z"
      />
    </svg>
  );
};

const playNextIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z" />
    </svg>
  );
};

const addQueueIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z" />
    </svg>
  );
};

const addToLibraryIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M0 0h24v24H0z" fill="none" />{" "}
      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
    </svg>
  );
};

const addToPlayListIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" />
    </svg>
  );
};

const goToArtistIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7.5-2v5.22c-.31-.14-.64-.22-1-.22a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5V12h2v-2h-3.5zM11 14c-2.67 0-8 1.34-8 4v2h10.76c-.48-.72-.76-1.58-.76-2.5 0-1.18.46-2.26 1.21-3.06-1.17-.29-2.33-.44-3.21-.44z" />{" "}
    </svg>
  );
};

const shareIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" />
    </svg>
  );
};

const youtubeIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path
        fillRule="nonzero"
        d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"
      />
    </svg>
  );
};

const meshIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.1-1.65c.2-.15.25-.42.13-.64l-2-3.46c-.12-.22-.4-.3-.6-.22l-2.5 1c-.52-.4-1.08-.73-1.7-.98l-.37-2.65c-.06-.24-.27-.42-.5-.42h-4c-.27 0-.48.18-.5.42l-.4 2.65c-.6.25-1.17.6-1.7.98l-2.48-1c-.23-.1-.5 0-.6.22l-2 3.46c-.14.22-.08.5.1.64l2.12 1.65c-.04.32-.07.65-.07.98s.02.66.06.98l-2.1 1.65c-.2.15-.25.42-.13.64l2 3.46c.12.22.4.3.6.22l2.5-1c.52.4 1.08.73 1.7.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.6-.25 1.17-.6 1.7-.98l2.48 1c.23.1.5 0 .6-.22l2-3.46c.13-.22.08-.5-.1-.64l-2.12-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
    </svg>
  );
};

const privacyIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
  );
};

const helpIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
  );
};

const feedBackIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
    </svg>
  );
};

const goToAlbumIcon = ({ sizex, sizey }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      width={sizex}
      height={sizey}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
    </svg>
  );
};

const Icon = ({ name, sizex, sizey = sizex }) => {
  if (sizex !== sizey) console.log(sizex, sizey);
  const icons = {
    search: searchIcon,
    settings: settingsIcon,
    chromecast: chromecastIcon,
    logo: logo,
    mini: miniLogo,
    prev: prevIcon,
    cast: castIcon,
    like: likeIcon,
    play: playIcon,
    home: homeIcon,
    explore: exploreIcon,
    library: libraryIcon,
    shuffle: shuffleIcon,
    playnext: playNextIcon,
    share: shareIcon,
    addToPlayList: addToPlayListIcon,
    goToArtist: goToArtistIcon,
    addQueue: addQueueIcon,
    addToLibrary: addToLibraryIcon,
    youtube: youtubeIcon,
    mesh: meshIcon,
    privacy: privacyIcon,
    help: helpIcon,
    feedBack: feedBackIcon,
    goToAlbum: goToAlbumIcon,
  };

  const Component = icons[name];
  return <Component sizex={sizex} sizey={sizey} />;
};

export { Icon };
