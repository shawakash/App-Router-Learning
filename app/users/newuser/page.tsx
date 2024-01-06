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

const NewUser= async () => {
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