import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './layoutes/Main';
import Post from './pages/PostPage';
import PostsList from './pages/PostsPage';
import 'nprogress/nprogress.css';
import Page from './components/Page';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Page>
                <PostsList />
              </Page>
            }
          ></Route>
          <Route
            path="/posts/:slug"
            element={
              <Page>
                <Post />
              </Page>
            }
          ></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default App;
