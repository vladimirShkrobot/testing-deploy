import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Users";
import Main from "../pages/Main";
import About from "../pages/About";
import Layout from "../Layout";
import Error from "../pages/Error";
import UsersDetails from "../pages/UserDetails";
import HelloWorld from "../pages/HelloWorld";
import UsersForE2e from "../components/UsersForE2e/UsersForE2e";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Main />
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path: 'users',
				element: <Users />,
			},
			{
				path: 'users/:id',
				element: <UsersDetails />,
			},
			{
				path: 'hello',
				element: <HelloWorld />
			},
			{
				path: 'users-e2e',
				element: <UsersForE2e />
			}
		]
	},
	{
		path: "*",
		element: <Error />,
	},
]

export const router = createBrowserRouter(routes);
