import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Comment(props) {
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
        d="M7.8 12.717c.331 0 .6.277.6.62v2.43c3.298-1.993 5.283-3.402 6.48-4.632.694-.714 1.076-1.323 1.298-1.904.223-.583.322-1.236.322-2.097 0-3.084-2.418-5.583-5.4-5.583H6.9c-2.982 0-5.4 2.5-5.4 5.583s2.418 5.583 5.4 5.583h.9zm.6 4.842C16.397 12.8 18 10.852 18 7.134 18 3.194 14.91 0 11.1 0H6.9C3.09 0 0 3.194 0 7.134c0 3.94 3.09 7.133 6.9 7.133v3.113c0 .474.494.773.893.538.206-.121.409-.241.607-.36z"
        fill="#687684"
      />
    </Svg>
  );
}

export default Comment;
