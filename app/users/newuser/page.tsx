import AddToCart from '@/app/components/Client/AddToCart';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/Client/Card';
import Users from '@/app/components/Client/Users';
import { User } from '@/app/types/interface';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { Chrome, Home, LampDesk, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React, { use } from 'react';



export type CardProps = React.ComponentProps<typeof Card>

const NewUser = async () => {

    /**
     * Caching: 
     * Axios doesn't provides caching so use fetch
     */
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            headers: {
                "Content-Type": "applications/json"
            },
            // cache: 'force-cache', // to cache the response from api,
            next: {revalidate: 10}   // fetches the api again in 10 seconds of time in background
        });
    const users: User[] = await res.json();
    return (
        <>
            <AddToCart />
            <h1>
                Users
            </h1>
            <div className="flex justify-center flex-col items-center p-16">
                <div className="flex flex-wrap gap-14 justify-center items-start">
                    <Users
                        users={users}
                    />
                </div>
            </div>
        </>
    );
};

export default NewUser;