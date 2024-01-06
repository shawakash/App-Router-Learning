import AddToCart from '@/app/components/Client/AddToCart';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/Client/Card';
import { User } from '@/app/types/interface';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { Chrome, Home, LampDesk, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React, { use } from 'react';



type CardProps = React.ComponentProps<typeof Card>

const NewUser: React.FC<CardProps> = async ({ className, ...props }) => {
    const res = await axios({
        method: "get",
        baseURL: "https://jsonplaceholder.typicode.com",
        url: "/users",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const users: User[] = res.data;
    return (
        <>
            <AddToCart />
            <Button>Hola</Button>
            <h1>
                Users
            </h1>
            <div className="flex justify-center flex-col items-center p-16">
                <div className="flex flex-wrap gap-14 justify-center items-start">
                    {users.map((user: User) => {
                        return <>
                            <Card className={cn("w-[380px]", className)} {...props} key={user.id}>
                                <CardHeader>
                                    <CardTitle>{user.name}</CardTitle>
                                    <CardDescription>{user.username}</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                                        <LampDesk />
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {user.company.name}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {user.company.catchPhrase}, {user.company.bs}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {user.address.city}, {user.address.zipcode}                                            </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {user.address.suite}, {user.address.street}.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {user.address.city}, {user.address.zipcode}                                            </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {user.address.suite}, {user.address.street}.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className={cn("flex flex-row gap-x-5")}>
                                    <Link href={`tel:${user.phone}`}>
                                        <Button className="w-fit">
                                            <Smartphone className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href={`mailto:${user.email}`}>
                                        <Button className="w-fit" >
                                            <Mail className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                                        <Button className="w-fit">
                                            <Chrome className="h-4 w-4" />
                                        </Button>
                                    </a>
                                </CardFooter>
                            </Card>
                        </>
                    })}
                </div>
            </div>
        </>
    );
};

export default NewUser;