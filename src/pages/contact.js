import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style = {{color: 'teal'}}>
        <Link to= "/">Homepage</Link>
        <Header headerText="Contact"></Header>
        <p>contact page test</p>
        <p>Send us a message</p>
    </div>
)