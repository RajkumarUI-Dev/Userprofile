import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import EditUser from './Pages/EditUsers';
import ViewUsers from './Pages/ViewUsers';
const Routing=()=>{
    return(
           <BrowserRouter>
           <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/users/edit/:id" component={EditUser} />
                    <Route exact path="/users/:id" component={ViewUsers} />
                </Switch>
           </div>
          </BrowserRouter>
    
    )
};

export default Routing;