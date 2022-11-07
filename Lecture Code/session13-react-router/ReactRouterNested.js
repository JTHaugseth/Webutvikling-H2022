import * as React from "react";
import {Routes, Route, BrowserRouter, NavLink, Link} from "react-router-dom";

import {useParams, Outlet} from "react-router-dom";

function Home() {    
  return (
    <div>
      <h1>This is a home page</h1>      
    </div>
  );
}
function Layout() {
  return (
    <div>
      <nav>
        <ul className="header">
            <li><NavLink to="/home" activeClassName="active">HomePage</NavLink></li>
            <li><NavLink to="/Invoices" activeClassName="active">Invoices</NavLink></li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
function Invoices({invoicesArray}) {
  return (
    <>
      <h2>Users</h2>

      <ul>
        {invoicesArray.map((invoice) => (
          <li key={invoice.id}>
            <Link to={`${invoice.id}`}>
              {invoice.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet/>
    </>
  );
}

function Invoice({invoicesArray}) {
  let params = useParams();
  let invoice = invoicesArray.find((invoice)=>
    {
        return invoice.id===parseInt(params.invoiceId)
    });
  return (
     <>
      <h2>Invoice {params.invoiceId}</h2>
      <p>{invoice.name}</p>
      <p>{invoice.amount}</p>
      <Link to="/invoices">Back to Invoices</Link>
    </>)
}

export default function ReactRouterNested() {

  const invoicesArray = [
    {
        id: 0,
        name: "Coop Extra",
        amount: 200
    },
    {
      id: 1,
      name: "Ark",
      amount: 500
    }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout/>} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />}></Route>
          <Route path="invoices" element={<Invoices invoicesArray={invoicesArray}/>}>
            <Route path=":invoiceId" element={<Invoice invoicesArray={invoicesArray}/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
