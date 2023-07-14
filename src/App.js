import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Nav from "./Nav";
import Companies from "./Companies";
import JobListings from "./JobListings";
import Jobs from "./Jobs";
import ProtectedRoute from "./ProtectedRoute";
import "./styles/App.css";

// const { JoblyApi } = require("./api");
import { JoblyApi } from "./api";

function App() {
    //login method from api helper
    async function login(username, password) {
        const loginUser = await JoblyApi.login(username, password);
        console.log("login user: ", loginUser);
        setUser(loginUser);
    }

    async function register(username, password, first, last, email) {
        const newUser = await JoblyApi.register(
            username,
            password,
            first,
            last,
            email
        );
        console.log("user: ", newUser);
        setUser(newUser);
    }


    async function updateProfile(username, data) {
        console.log("Data from form: ", data);
        const newProfile = await JoblyApi.updateProfile(username, data);
        setUser(newProfile);
    }


    /**
     * Apply to job and update users applications list
     * @param {*} jobID 
     */
        async function apply(jobID){
            const response = await JoblyApi.apply(jobID, user.username);
            if (response.applied){
                setApplications(applications => [...applications, response.applied]);
            }
        }


    const [user, setUser] = useState(() => {
        const userJSON = localStorage.getItem("user");
        return userJSON ? JSON.parse(userJSON) : {};
    });

    const [applications, setApplications] = useState(() => {
        const userJSON = localStorage.getItem("user");
        const user = userJSON ? JSON.parse(userJSON) : {};
        // console.log("Applications: ", user.applications);
        return user.applications;
    });


    return (
        <div className="App">
            <BrowserRouter>
                <Nav user={user} setUser={setUser} />
                <main>
                    <Routes>
                        <Route path="/" element={<Home user={user} />} />
                        <Route
                            path="/signup"
                            element={<SignUp doSignUp={register} />}
                        />
                        <Route
                            path="/login"
                            element={<Login doLogin={login} />}
                        />
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    doProfile={updateProfile}
                                    user={user}
                                />
                            }
                        />

                         <Route path="/companies" element={
                            <ProtectedRoute user={user}>
                                <Companies />
                            </ProtectedRoute>
                         } />
                        <Route path="/companies/:handle" element={
                            <ProtectedRoute user={user}>
                                <JobListings apply={apply} applications={applications}/>
                            </ProtectedRoute>}
                        />
                        <Route path="/jobs" element={
                            <ProtectedRoute user={user}>
                                <Jobs apply={apply} applications={applications}/>
                            </ProtectedRoute>
                        } />

                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
