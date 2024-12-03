'use client'

import { UserCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const [data, setData] = useState<any>(null)

    useEffect(() => {
        const token = Cookies.get('ACCESS_TOKEN')
        if (token) {
            setData(jwtDecode(token))
        }
    }, [])

    const handleLogout = async () => {
        try {
            Cookies.remove('ACCESS_TOKEN')

            setTimeout(() => {
                router.push('/login')
            }, 3000)
        } catch (error) {
            console.log('cek error', error)
        }
    }

    return (
        <div className="flex h-screen">
            <aside className="bg-gray-800 text-white w-64 flex flex-col">
                <header className="h-16  text-white flex items-center justify-center">
                    <h1 className="font-semibold">dashboarsky</h1>
                </header>
                <nav className="flex-1 overflow-auto p-4">
                    <ul className="space-y-2">
                        {data?.role === 'admin' && (
                            <li>
                                <a
                                    className="block p-2 hover:bg-gray-700 rounded hover:cursor-pointer"
                                    onClick={() => router.push('/dashboard/home')}
                                >
                                    Home
                                </a>
                            </li>
                        )}

                        <li>
                            <a
                                className="block p-2 hover:bg-gray-700 rounded hover:cursor-pointer"
                                onClick={() => router.push('/dashboard/users')}
                            >
                                Users
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-gray-900 text-white flex items-center justify-end w-full">
                    <div className="flex items-center space-x-2">
                        <span>{data?.username}</span>

                        <UserCircle className="w-8 h-8 mr-4" />

                        <span onClick={handleLogout} className="text-xs hover:cursor-pointer hover:underline">
                            logout
                        </span>
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-4">
                    <div>{children}</div>
                </main>
            </div>
        </div>
    )
}
