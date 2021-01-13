import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import Layout from './pages/Layout';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
//import Sidebar from './components/Sidebar';
import './assets/App.scss';

function App(){
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/signin" component={SignIn}/>
      </Layout>
    </BrowserRouter>
  )
}

export default App;