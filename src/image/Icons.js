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
      <path d="M14.9 3H6c-.8 0-1.5.5-1.8 1.2l-3 7.3c-.1.2-.2.4-.2.7v2c0 1.1.9 2 2 2h6.3l-1 4.7v.3c0 .4.2.8.4 1.1.6.7 1.5.7 2.1.1l5.5-5.7c.4-.4.6-.9.6-1.4V5c0-1.1-.9-2-2-2zm-.2 12.6l-3.5 3.6c-.2.2-.5 0-.4-.2l1-4.6H4c-.6 0-1-.5-1-1v-1.1l2.7-6.6c.2-.5.6-.7 1-.7H14c.5 0 1 .5 1 1v8.8c-.1.3-.2.6-.3.8zM19 3h4v12h-4V3z"></path>
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
      <path d="M8 5v14l11-7z"></path>
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
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
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
      <path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path>
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
      <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
    </svg>
  );
};

const Icon = ({ name, sizex, sizey = sizex }) => {
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
  };

  const Component = icons[name];
  return <Component sizex={sizex} sizey={sizey} />;
};

export { Icon };
