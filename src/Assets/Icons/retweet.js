import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';

function Retweet(props) {
  const normal = '#687684';
  const active = '#59bc6c';
  const [btnActive, setBtnActive] = React.useState(false);
  return (
    <TouchableOpacity onPress={() => setBtnActive(!btnActive)}>
      <Svg
        width={22}
        height={15}
        viewBox="0 0 22 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M4.281.17a.644.644 0 00-.87 0L.225 3.16c-.3.283-.3.74 0 1.022.3.282.788.282 1.088 0l1.764-1.656v8.658c0 1.995 1.722 3.612 3.846 3.612h4.923c.425 0 .77-.324.77-.723 0-.399-.345-.722-.77-.722H6.923c-1.274 0-2.308-.97-2.308-2.167V2.526L6.38 4.182c.3.282.788.282 1.088 0 .3-.282.3-.74 0-1.021L4.281.169zM17.719 14.83c.24.226.63.226.87 0l3.186-2.99c.3-.283.3-.74 0-1.022a.805.805 0 00-1.088 0l-1.764 1.656V3.816c0-1.995-1.722-3.612-3.846-3.612h-4.923c-.425 0-.77.324-.77.723 0 .399.345.722.77.722h4.923c1.274 0 2.308.97 2.308 2.167v8.658l-1.764-1.656a.805.805 0 00-1.088 0c-.3.282-.3.74 0 1.021l3.186 2.992z"
          fill={btnActive ? active : normal}
        />
      </Svg>
    </TouchableOpacity>
  );
}

export default Retweet;
