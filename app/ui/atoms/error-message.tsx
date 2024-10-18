export default function ErrorMessage({ message }: { message: string }) {
    return <div className='text-red-400 text-2xl bg-red-800 md:w-full p-2 rounded-lg mb-2 mt-4'>
        <p className={"text-red-500 text-center"}>{message}</p>
    </div>
}