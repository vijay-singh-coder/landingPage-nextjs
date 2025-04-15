import ContainerWrapper from '@/components/container'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <ContainerWrapper className='flex flex-col items-center justify-center h-screen'>
            <SignUp />
        </ContainerWrapper>
    )
}