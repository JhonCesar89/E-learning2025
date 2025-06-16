// src/app/courses/[slug]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import courseData from '@/app/data/courseData'
import Navbar from '../../layout/navbar/Navbar'
import Sidebar from '../../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


export default function CoursePage() {
  const { slug } = useParams();
  const router = useRouter();
  const course = courseData[slug as string];

  if (!course) {
    router.push('/404'); // Redirigir a una página 404
    return null; // O puedes mostrar un mensaje de error
  }
  // Renderizar la página del curso
  // Aquí puedes usar el slug para buscar los datos del curso en tu base de datos o API
  // Por simplicidad, usamos un objeto courseData simulado
  // que contiene los datos de los cursos.

  return (
    <>
      <Navbar />
      
      <div className="bg-gradient-to-b from-gray-100 to-indigo-100 min-h-screen py-12 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            <header>
              <h1 className="text-6xl text-center font-bold text-indigo-800 mb-4">
                Comienza hoy tu carrera en {course.title}
              </h1>
            </header>

            <section>
              <h3 className="text-4xl text-center font-semibold text-indigo-700 mb-4">
                ¿Qué es ser un {course.title}?
              </h3>
              <p className="text-gray-700 text-lg text-justify leading-relaxed">{course.intro}</p>
              <h3 className="text-4xl font-semibold text-indigo-700 text-center mt-4">
                  Beneficios de aprender {course.title}
                </h3>            
            </section>            

            <section className='grid md:grid-cols-2 gap-8 items-start'>
              {/* Left: list */}
              <div>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {course.benefits.map((b, i) => (
                  <li key={i} className="flex items-start text-justify text-lg gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1" />
                    <span className="flex-1">{b}</span>
                  </li>
                  ))}
                </ul>
              </div>

              {/* Right: image with overlay */}
              <div className='relative w-[350px] h-[400px] group rounded-lg overflow-hidden items-center'>
                <Image
                  src={course.images[0]}
                  alt={`Promo de ${course.title}`}
                  fill
                  className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                  <p className='text-white text-lg font-semibold text-center px-4'>
                    ¡Transforma tu carrera con nosotros! Aprende {course.title}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-4xl font-semibold text-indigo-700 mb-4">
                Inscríbete a nuestro curso y conviértete en un profesional en {course.title}
              </h3>
              <p className="text-gray-700 text-justify text-lg marker:mb-6 mb-6">{course.enrollMessage}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {course.images.map((src, i) => (
                  <Image key={i} src={src} alt={`Curso ${course.title} ${i + 1}`} width={400} height={300} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0">
            <Sidebar
              price={course.price}
              startDate={course.startDate}
              courseDuration={course.courseDuration}
              enrollLink="/register"
              inquiryLink="/?view=register"
              paymentLink="/#payment"
            />
          </div>
        </div>
      </div>
    </>
  );
}

