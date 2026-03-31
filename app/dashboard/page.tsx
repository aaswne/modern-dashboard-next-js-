"use client"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import Controls from "../components/Controls"
import Display from "../components/Display"
import Form from "../components/Form"

function Page() {

    const [data, setData] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("tasks")
            return stored ? JSON.parse(stored) : []
        }
        return []
    })


    const [open, setOpen] = useState(false)
    console.log(open)


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(data))
    }, [data])

    return (
        <div className="p-10">
            <Header />
            <Controls open={open} setOpen={setOpen} />
            {open && <Form data={data} setData={setData} open={open} setOpen={setOpen} />}
            <Display data={data} setData={setData} />
        </div>
    )
}

export default Page