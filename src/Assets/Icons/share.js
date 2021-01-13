import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

function Share(props) {
  return (
    <TouchableOpacity>
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
          d="M8.583.178a.578.578 0 01.834 0l4.236 4.364a.776.776 0 010 1.075.723.723 0 01-1.043 0l-2.872-2.96v9.11c0 .42-.33.76-.738.76a.75.75 0 01-.738-.76v-9.11L5.39 5.618a.722.722 0 01-1.043 0 .776.776 0 010-1.075L8.583.178zM.738 9.792a.75.75 0 01.737.76v4.864c0 .587.463 1.064 1.033 1.064h12.984c.57 0 1.033-.477 1.033-1.064v-4.864c0-.42.33-.76.737-.76a.75.75 0 01.738.76v4.864C18 16.843 16.877 18 15.492 18H2.508C1.123 18 0 16.843 0 15.416v-4.864c0-.42.33-.76.738-.76z"
          fill="#687684"
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default Share;
