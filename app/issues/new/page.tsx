'use client'
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Callout } from '@radix-ui/themes';

interface IssueForm {
    title: string;
    description: string;
}



const NewIssuePage = () => {
    const router = useRouter(); // router form navigation is very importatnt 
    const { register, control, handleSubmit } = useForm<IssueForm>()
    const [error, setError] = useState('');
    //console.log(register('title'))

    return (
        <div className='max-w-xl' >
            {error && <Callout.Root color="red" className='mb-5'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
            <form className='space-y-3'
                onSubmit={handleSubmit(async (data) => {
                    //console.log(data)
                    try {
                        await axios.post('/api/issues', data)
                        router.push('/issues')
                    } catch (error) {
                        setError('Unexpected error occured')

                    }
                }

                )}

            >
                <TextField.Root>
                    <TextField.Input placeholder='Title' {...register('title')} />
                </TextField.Root>
                <Controller name="description"
                    control={control}
                    render={({ field }) => <SimpleMDE placeholder="Description" {...field} />
                    }
                />
                <Button> Submit New Issue </Button>
            </form >
        </div>
    )
}

export default NewIssuePage