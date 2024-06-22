import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardWrapperProps {
    children: React.ReactNode,
    title: string,
}


const CardWrapper = ({children,title}: CardWrapperProps) => {
    return (
        <div>
            <Card className='w-[1000px] h-[300px] mt-7'>
                <CardHeader>
                    <CardTitle className='flex justify-center'>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
            </Card>

        </div>
    )
}

export default CardWrapper
