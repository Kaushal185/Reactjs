import React from 'react'

export default function TextForm(props) {
  return (
    <div class="mb-3">
        <h1>{props.heading}</h1>
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
  )
}
