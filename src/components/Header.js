import React from 'react'
import { Link } from "react-router-dom"
import './Header.scss'

export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
        <li>
          <Link to="/CloneElement">Transforming Elements - cloneElement()</Link>
        </li>
      </ul>
    </div>
  )
}