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
              <h1 className="text-6xl text-center font-bold text-indigo-800 mb-6">
                Comienza hoy tu carrera en {course.title}
              </h1>
            </header>

            <section>
              <h3 className="text-4xl text-center font-semibold text-indigo-700 mb-6">
                ¿Qué es ser un {course.title}?
              </h3>
              <p className="text-gray-700 text-xl text-justify leading-relaxed">{course.intro}</p>
              
              {/*Conditionally show the course-specific video */}
              {course.video && (
                <div className="flex justify-center my-8">
                  {course.video.includes('youtube.com') ? (
                      <iframe
                        src={course.video}
                        title={`Video de introducción a ${course.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='w-full max-w-3xl h-[250px] sm:h-[360px]rounded-lg shadow-lg'
                      />
                    ) : (
                      <video
                        src={course.video}
                        controls
                        className="rounded-lg shadow-lg w-full max-w-3xl"
                      />
                    )}
                </div>
              )}
              <h3 className="text-4xl font-semibold text-indigo-700 text-center mt-6">
                  Beneficios de ser un profesional {course.title}
                </h3>            
            </section>            

            <section className='flex flex-col items-center gap-8'>
              {/* Center: list */}
              <div className='flex justify-center'>
                <ul className="space-y-4 max-w-2xl w-full">
                  {course.benefits.map((b, i) => (
                  <li 
                    key={i} 
                    className="flex items-center justify-center text-xl gap-2 text-center"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-green-500 min-w-[24px]"
                    />
                    <span className="text-center">{b}</span>
                  </li>
                  ))}
                </ul>
              </div>

            </section>

            <section>
              <h3 className="text-4xl font-semibold text-indigo-700 mb-6 text-center">
                Inscríbete a nuestro curso y conviértete en un profesional en {course.title}
              </h3>
              <p className="text-gray-700 text-justify text-xl marker:mb-6 mb-8">{course.enrollMessage}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {course.images.map((src, i) => (
                  <div
                    key={i} 
                    className="relative group w-full h-[450px] overflow-hidden rounded-lg shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Curso ${course.title} ${i + 1 }`}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <p className="text-white text-xl font-semibold text-center px-4">
                        {course.overlayTexts?.[i] || 'Descubre más sobre este curso'}
                      </p>
                    </div>
                  </div>
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

