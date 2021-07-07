import React from 'react';

const InputEl = React.forwardRef((props, ref) => <input ref={ref} type="text" placeholder="Focus using ref and forwardingRef" />);

export default InputEl;
