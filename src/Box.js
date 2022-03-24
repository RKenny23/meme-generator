import React from 'react';

export default function Box(props) {
  // const [on, setOn] = React.useState(props.on)

  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent'
  }

  // function toggle() {
  //   setOn(prevOn => !prevOn)
  // }

  return (
    <div onClick={props.toggle} style={styles} className="box"></div>
  )
}
