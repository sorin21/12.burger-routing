import React from 'react';
import Aux from '../../hoc/_Aux';
import classes from './Layout.css'

const Layout = (props) => {
  return <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>;
};

export default Layout;