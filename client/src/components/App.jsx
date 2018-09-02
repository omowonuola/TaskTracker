import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
// import GroupIndexContainer from './group/group_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ChatIndexContainer from './chat/chat_index_container';
import ChatShowContainer from './chat/chat_show_container';
import TaskIndexContainer from './task/task_index_container';
import HomePageContainer from './home/home_page_container';
import GroupModal from './modal/group_modal';
import SplashPage from './splash/splash_page';

const App = () => (
  <div>
    <GroupModal />
    <header>
    </header>

    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute path="/" component={TaskIndexContainer} />

    <Route exact path="/chats/:chatId" component={ChatShowContainer} />
    {/* <Route exact path="/tasks" component={TaskIndexContainer} /> */}
    <ProtectedRoute exact path="/" component={HomePageContainer} />
  </div>
);

export default App;