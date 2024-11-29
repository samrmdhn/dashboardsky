import { User, UserCircle } from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <aside className="bg-gray-800 text-white w-64 flex flex-col">
                <header className="h-16  text-white flex items-center justify-center">
                    <h1 className="font-semibold">dashboarsky</h1>
                </header>
                <nav className="flex-1 overflow-auto p-4">
                    <ul className="space-y-2">
                        <li>
                            <a className="block p-2 hover:bg-gray-700 rounded" href="#">
                                Home
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1 flex flex-col">
                <header className="h-16 bg-gray-900 text-white flex items-center justify-end w-full">
                    <h1 className="font-semibold">
                        <UserCircle className="w-8 h-8 mr-4" />
                    </h1>
                </header>
                <main className="flex-1 overflow-auto p-4">
                    <div>{children}</div>
                </main>
            </div>
        </div>
    )
}
