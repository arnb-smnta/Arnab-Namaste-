useEffect({function},[dependency array])

if the dependency array is not set useEffect hook will be called every time the react is rendered
if no dependency array => useEffect is called on every render
if dependency array is empty=[]=> use effect is called once on initial render
if dependency array is present [value or variable] every time the value changes useEffect will be called.

useState -Best practices -never use useState inside jsx componenent it is used to create local state variable into your functional component,
never use your usestate in if else or any condition or any function they are supposed to call in higher level in the functional component

React-router-dom

Whenever we need route we need to develop a routing configuration
{createBrowserRouter,Routerprovider} from reactrouter

React router dom gives hook {useRouteError} for error

Children routes of app layout
{Outlet}

{Link} it works exactly the same as anchor tag even the implementation-> <Link to="/About">About us</Link> same as <a href='/about'> About us </a>
We should use the link from react router because whenever we use this to go to another page it does not re renders the entire page it faster and efficient

# Two types of routing in web apps

-Client site routing
-Server side routing

H.w Graph ql?

Dynamic routing
{useParams} use to extract the data from the variable in the url directly into our code
H.w Try to do all the features.
