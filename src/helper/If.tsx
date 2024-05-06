import React from 'react'

function If(props:{truth:boolean, children: React.ReactNode}) {
  if(!props.truth) return null;
  return <>{props.children}</>
}

export default If