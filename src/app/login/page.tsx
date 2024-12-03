'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import EXAMPLE_IMAGE from '@/assets/image.jpg'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import { postAuthLoginService } from '@/redux/services/authLoginService'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { jwtDecode } from 'jwt-decode'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useAppDispatch()

    const { data } = useAppSelector((state) => state.auth_login)

    const router = useRouter()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(postAuthLoginService({ username, password }))
    }

    useEffect(() => {
        if (data?.token) {
            Cookies.set('ACCESS_TOKEN', data.token)
            const tokenData: any = jwtDecode(data.token)

            if (tokenData.role === 'admin') {
                router.push('/dashboard/home')
            } else {
                router.push('/dashboard/users')
            }
        }
    }, [data])

    return (
        <div className="flex h-screen">
            <div className="hidden lg:block lg:w-1/2 relative">
                <Image src={EXAMPLE_IMAGE} alt="Login background" layout="fill" objectFit="cover" priority />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-primary">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
                        <CardDescription>Please sign in to your account</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" required onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <Button type="submit" className="w-full mb-4">
                                Sign In
                            </Button>
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}
