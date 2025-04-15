import ContainerWrapper from '@/components/container'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <ContainerWrapper className='flex flex-col items-center justify-center h-screen'>
            <SignIn />
        </ContainerWrapper>
    )
}