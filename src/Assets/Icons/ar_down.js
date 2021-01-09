import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Ar_Down(props) {
  return (
    <Svg
      width={15}
      height={10}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 1L5.854 5.146a.5.5 0 01-.708 0L1 1"
        stroke="#BDC5CD"
        strokeWidth={1.25}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default Ar_Down;
