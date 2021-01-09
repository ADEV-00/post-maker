import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Like(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.961.15a4.419 4.419 0 013.24.38l.412.221c.498.266.935.63 1.292 1.067.05.061.14.061.19 0 .357-.436.794-.8 1.292-1.067l.412-.22c1-.536 2.15-.673 3.24-.38a4.649 4.649 0 012.596 1.842l.231.33A6.352 6.352 0 0118 5.961v.369c0 .585-.067 1.167-.2 1.735l-.08.346a10.396 10.396 0 01-1.6 3.6l-.47.67c-.377.54-.79 1.05-1.236 1.528l-.476.51a15.142 15.142 0 01-3.915 3.023 2.156 2.156 0 01-2.046 0 15.141 15.141 0 01-3.914-3.022l-.477-.51a14.021 14.021 0 01-1.236-1.528l-.47-.671a10.398 10.398 0 01-1.6-3.6L.2 8.065A7.64 7.64 0 010 6.33V5.96c0-1.307.395-2.583 1.134-3.638l.23-.33A4.649 4.649 0 013.962.15zm2.544 1.68a2.943 2.943 0 00-2.162-.254 3.174 3.174 0 00-1.77 1.263l-.23.33c-.561.8-.868 1.78-.868 2.792v.369c0 .472.054.942.161 1.4l.08.345a8.923 8.923 0 001.373 3.09l.47.67c.338.484.708.941 1.106 1.367l.476.51a13.665 13.665 0 003.533 2.73c.207.11.445.11.652 0a13.666 13.666 0 003.533-2.73l.476-.51c.398-.426.768-.883 1.107-1.366l.47-.671a8.923 8.923 0 001.371-3.09l.08-.345c.108-.458.162-.928.162-1.4V5.96a4.877 4.877 0 00-.867-2.792l-.231-.33a3.174 3.174 0 00-1.77-1.263 2.943 2.943 0 00-2.162.255l-.412.22a2.909 2.909 0 00-1.25 1.344c-.491 1.054-1.178 1.047-1.667 0a2.908 2.908 0 00-1.25-1.343l-.411-.221z"
        fill="#687684"
      />
    </Svg>
  );
}

export default Like;
