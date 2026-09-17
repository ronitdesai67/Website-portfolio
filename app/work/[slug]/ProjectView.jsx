'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { assets } from '@/assets/assets'
import Footer from '../../components/Footer'

export default function ProjectView({ project }) {
  return (
    <div className='dark:bg-dark-theme dark:text-white min-h-screen'>
      <div className='w-full px-[8%] sm:px-[12%] py-10'>
        <div className='flex items-center justify-between mb-12'>
          <Link href='/'>
            <Image src={assets.logo} alt='' className='w-28 dark:hidden' />
            <Image src={assets.logo_dark} alt='' className='w-28 hidden dark:block' />
          </Link>
          <Link
            href='/#work'
            className='flex items-center gap-2 font-Ovo text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors'
          >
            ← Back to portfolio
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='font-Ovo text-purple-600 dark:text-purple-400 mb-2'>{project.client}</p>
          <h1 className='font-Ovo text-4xl sm:text-5xl mb-4'>{project.title}</h1>
          <p className='text-lg text-gray-700 dark:text-white/70 max-w-2xl mb-8 leading-8'>
            {project.tagline}
          </p>

          <div className='flex flex-wrap gap-4 mb-10'>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-Ovo hover:opacity-80 transition shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]'
              >
                View live demo →
              </a>
            ) : (
              <span className='px-8 py-3 border border-gray-400 dark:border-white/30 rounded-full font-Ovo text-gray-400 dark:text-white/40 cursor-not-allowed'>
                Live demo — coming soon
              </span>
            )}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='px-8 py-3 border border-gray-500 dark:border-white/40 rounded-full font-Ovo hover:bg-light-hover dark:hover:bg-dark-hover transition'
              >
                View code
              </a>
            ) : (
              <span className='px-8 py-3 border border-gray-400 dark:border-white/30 rounded-full font-Ovo text-gray-400 dark:text-white/40 cursor-not-allowed'>
                Code — coming soon
              </span>
            )}
          </div>

          <div className='rounded-2xl overflow-hidden border border-gray-300 dark:border-white/10 shadow-lg mb-14'>
            <Image
              src={project.bgImage}
              alt={project.title}
              width={1400}
              height={900}
              className='w-full h-auto'
              priority
            />
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14'>
            <div>
              <h3 className='font-Ovo text-2xl mb-3'>The problem</h3>
              <p className='text-gray-700 dark:text-white/70 leading-7'>{project.problem}</p>
            </div>
            <div>
              <h3 className='font-Ovo text-2xl mb-3'>What was built</h3>
              <p className='text-gray-700 dark:text-white/70 leading-7'>{project.solution}</p>
            </div>
          </div>

          <div className='mb-14'>
            <h3 className='font-Ovo text-2xl mb-4'>Engineering highlights</h3>
            <ul className='space-y-3'>
              {project.highlights.map((h, i) => (
                <li key={i} className='flex items-start gap-3 text-gray-700 dark:text-white/70'>
                  <span className='mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 shrink-0' />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-14'>
            <h3 className='font-Ovo text-2xl mb-4'>Tech stack</h3>
            <div className='flex flex-wrap gap-3'>
              {project.stack.map((t, i) => (
                <span
                  key={i}
                  className='px-4 py-1.5 rounded-full border border-gray-400 dark:border-white/20 text-sm font-Ovo'
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className='rounded-2xl border border-gray-300 dark:border-white/10 p-6 mb-14 bg-light-hover dark:bg-dark-hover'>
            <h3 className='font-Ovo text-xl mb-2'>Try it yourself</h3>
            <p className='text-gray-700 dark:text-white/70'>
              Login:{' '}
              <code className='font-mono bg-white/60 dark:bg-black/30 px-1.5 py-0.5 rounded'>
                {project.demoLogin.email}
              </code>{' '}
              /{' '}
              <code className='font-mono bg-white/60 dark:bg-black/30 px-1.5 py-0.5 rounded'>
                {project.demoLogin.password}
              </code>
            </p>
            <p className='text-sm text-gray-500 dark:text-white/50 mt-2'>{project.demoLogin.note}</p>
            {project.liveUrl && (
              <p className='text-sm text-gray-500 dark:text-white/50 mt-2'>
                This is a public demo — anything you change resets automatically on a schedule, so
                feel free to click around.
              </p>
            )}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
