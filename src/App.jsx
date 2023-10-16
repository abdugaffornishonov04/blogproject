import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Fragment, useContext } from "react"
import { ToastContainer } from "react-toastify"

import FrontLayout from "./components/layout/front"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import AllPostsPage from "./pages/AllPostsPage"
import BlogPostPage from "./pages/BlogPostPage"
import AboutUsPage from "./pages/AboutUsPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AccountPage from "./pages/AccountPage"
import MyPostsPage from "./pages/MyPostsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { AuthContext } from "./context/AuthContext"

function App() {
 const {isAuthenticated} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<FrontLayout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="allposts" element={<AllPostsPage />} />
          <Route path="blogpost/:blogId" element={<BlogPostPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="login"
            element={<LoginPage  />}
          />
          {isAuthenticated ?  (
            <Fragment>
              <Route path="account" element={<AccountPage />} />
              <Route path="myposts" element={<MyPostsPage />} />
            </Fragment>
          ) : null  }

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

// heruub iuv 44ifv4 f44y f4fy4v fh4uf

// done some pages at 8:42 pm

//  left is the getting data via the id
