"use client"
import { Button } from '@/components/ui/button'
import {useRouter} from 'next/navigation'
function Header() {
    const route = useRouter()
    const gotoLogin = () =>{
        route.push("/Login")
    }
  return (
    <div>
       <div className="mb-6 flex  flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-2xl font-semibold">Task Dashboard</h1>
                <p className="text-sm text-gray-600">
                    Manage your tasks in a simple way
                </p>
            </div>

            <Button onClick={gotoLogin} variant="outline">
                Logout
            </Button>
        </div>
    </div>
  )
}

export default Header
