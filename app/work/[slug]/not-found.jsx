import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-4 dark:bg-dark-theme dark:text-white'>
      <p className='font-Ovo text-xl'>Project not found.</p>
      <Link
        href='/#work'
        className='font-Ovo underline hover:text-purple-600 dark:hover:text-purple-400'
      >
        Back to portfolio
      </Link>
    </div>
  )
}
