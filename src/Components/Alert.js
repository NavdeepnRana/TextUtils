import React from 'react'

export default function Alert(props) {
    const capatilise=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height : '50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatilise(props.alert.type)}</strong>:{props.alert.msg}
    </div>}
    </div>
  )
}


// https://create-react-app.dev/docs/deployment/#github-pages
