import { Route, Routes } from "react-router-dom";
import Posts from "../../pages/posts";
import Auth from "../../pages/auth";
import { Path } from "../constants/routerPath";
import Post from "../../pages/openPost";
import CreatePost from "../../pages/createPost";
import Profile from "../../pages/Profile";
import Users from "../../pages/users";
import WithAuth from "../HOCs/withAuth";

const RootRouter = () => {
    return(
        <>
            <Routes>
                <Route path = {Path.main} element = {<Posts/>}/>
                <Route path = {Path.authLogIn} element = {<Auth isLogin = {true}/>}/>
                <Route path = {Path.authSignIn} element = {<Auth isLogin = {false}/>}/>
                <Route path = {Path.post + '/:id'} element = {<Post/>}/>
            </Routes>
            <WithAuth>
                <Routes>
                    <Route path = {Path.createPost} element = {<CreatePost/>}/>
                    <Route path = {Path.profile} element = {<Profile/>}/>
                    <Route path = {Path.profile + '/:id'} element = {<Profile/>}/>
                    <Route path = {Path.users} element = {<Users/>}/>
                </Routes>
            </WithAuth>
        </>
    )
};

export default RootRouter;
