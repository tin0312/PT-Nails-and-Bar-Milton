import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main className="w-3/4 mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}