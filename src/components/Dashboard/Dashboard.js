import React from "react"
import { fakeAuth } from "../../Utils/fakeAuth"
import { useNavigate } from "react-router-dom"

const Dashboard = ({ x }) => {
  const navigate = useNavigate()
  return (
    <div>
      <p>This will be the private page of the user.</p>
      <button
        onClick={() => {
          fakeAuth.logout(() =>
            navigate("/login", { state: { from: { pathname: "/dashboard" } } })
          )
        }}
      >
       Logout
      </button>
    </div>
  )
}

export default Dashboard
