/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'

import Page from '../../components/Page/Page'
import './styles.scss'

const Home = () => (
  <Page className="Home">
    <div>
      <h1>Welcome!</h1>
      <p>Find all the sets.</p>
      <p>A set is a group of 3 cards that satisfies all the following conditions:</p>
      <ul>
        <li>They all have the same symbol or have three different symbols.</li>
        <li>
          They all have the same number of symbols or have three different numbers of symbols.
        </li>
        <li>They all have the same shading or have three different shadings.</li>
        <li>They all have the same color or have three different colors.</li>
      </ul>
      <br />
      <Link className="Button" to="/play">
        Play Set!
      </Link>
    </div>
  </Page>
)

export default Home
