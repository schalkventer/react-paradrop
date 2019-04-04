import React from 'react';
import Logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const App = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLogo = styled(Logo)`
  animation: ${spinAnimation} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const Link = styled.a`
  color: #61dafb;
`;

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
`;


function App() {
  return (
    <App>
      <Header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <Code>src/App.js</Code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </App>
  );
}

export default App;
