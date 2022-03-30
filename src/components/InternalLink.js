import React from 'react'
import { Link } from "gatsby"






export default function InternalLink( {href, children} ) {
  return (
    <Link to={href} className="internal-link">{children}</Link>
  )
}
