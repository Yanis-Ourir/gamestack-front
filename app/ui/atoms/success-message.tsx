export default function SuccessMessage({ message } : {message: string}) {
    return <div className='text-green-400 text-2xl bg-green-800 lg:w-1/3 md:w-full p-2 rounded-lg mb-2 mt-4'>
        <p className={"text-green-500 text-center"}>{message}</p>
    </div>
}