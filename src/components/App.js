import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './Layout.js';
import Home from '../pages/Home';
import Badges from '../pages/Badges.js';
import BadgeNew from '../pages/BadgeNew.js';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer.js'
import NotFound from '../pages/NotFound.js';
import BadgeEdit from '../pages/BadgeEdit.js';

function App (){
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route exact path='/badges/:badgeId' component={BadgeDetailsContainer} />
          <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
          <Route component={NotFound}/>
        </Switch>
      </Layout>

    </BrowserRouter>
  );
}

export default App;