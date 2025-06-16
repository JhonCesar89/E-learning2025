// src/app/components/Sidebar.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import PaymentMethods from '../layout/navbar/modals/payment/PaymentMethods'

interface SidebarProps {
  price: string
  startDate: string
  courseDuration: string
  enrollLink: string
  inquiryLink: string
  paymentLink: string
}

const Sidebar: React.FC<SidebarProps> = ({
  price,
  startDate,
  courseDuration,
  enrollLink,
  inquiryLink,
  paymentLink
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  return (
    <aside className="bg-white p-6 rounded-lg shadow-lg space-y-6 sticky top-24">
      {/* Start Date & Duration */}
      <section>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2 text-indigo-800">
          <Image 
            src="/icons/calendarIcon.png"
            alt="Calendario" width={24} height={24} />
            Inicio de cursada: {startDate}
        </h3>
        <div className="flex items-center gap-2 text-gray-600">
          <Image 
            src="/icons/clockIcon.png"
            alt="Duración" 
            width={20} 
            height={20} />
          {courseDuration}
        </div>
      </section>

      {/* Price */}
      <section>
        <p className="text-gray-700">Valor:</p>
        <h3 className="text-2xl font-bold text-green-700">{price}</h3>
        <div className="text-sm text-gray-500 mt-1">3 y 6 cuotas sin interés</div>
      </section>

      {/* Buttons */}
      <section className="space-y-2">
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
          onClick={() => window.location.href = enrollLink}>
          Inscribirse ahora
        </button>
        <button className="w-full bg-gray-200 text-indigo-700 py-2 px-4 rounded hover:bg-gray-300"
          onClick={() => window.location.href = inquiryLink}>
          Realizar consulta
        </button>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          onClick={() => window.location.href = paymentLink}>
          Pago
        </button>
      </section>

      {/* Payment Methods */}
      <section>
        <h3 className="text-md font-semibold mb-1 flex items-center gap-2">
          Medios de pago aceptados
          <Image 
            src="/icons/argentinaIcon.png"
            alt="Argentina" 
            width={20} 
            height={20} />
        </h3>
        <small className="block text-gray-500 mb-2">Abonando a través de MercadoPago:</small>

        <p className="text-sm font-medium text-gray-700 mb-2">Tarjeta de débito</p>
        <div className="flex flex-wrap justify-center gap-6 mb-3">
          <Image src="/pay/mastercardIcon.png" alt="Mastercard débito" width={32} height={20} />
          <Image src="/pay/cabaldebIcon.png" alt="Cabal débito" width={32} height={20} />
          <Image src="/pay/visaIcon.png" alt="Visa débito" width={32} height={20} />
          <Image src="/pay/maestroIcon.png" alt="Maestro débito" width={32} height={20} />
        </div>

        <p className="text-sm font-medium text-gray-700 mb-2">Tarjeta de crédito</p>
        <div className="flex gap-6 justify-center flex-wrap mb-3">
          <Image src="/pay/amexIcon.png" alt="Amex" width={32} height={20} />
          <Image src="/pay/naranjaIcon.png" alt="Naranja" width={32} height={20} />
          <Image src="/pay/visaIcon.png" alt="Visa crédito" width={32} height={20} />
          <Image src="/pay/shopingIcon.png" alt="Shopping" width={32} height={20} />
          <Image src="/pay/cabalcredIcon.png" alt="Cabal crédito" width={32} height={20} />
        </div>

        <p className="text-sm font-medium text-gray-700 mb-2">Efectivo</p>
        <div className="flex gap-8 justify-center flex-wrap mb-3">
          <Image src="/pay/pagofacilIcon.png" alt="Pago Fácil" width={32} height={20} />
          <Image src="/pay/rapipagoIcon.png" alt="Rapipago" width={32} height={20} />
        </div>

        <button className="text-sm text-indigo-600 underline" onClick={() => setShowPaymentModal(true)}>
          Métodos de Pago
        </button>
        <PaymentMethods isOpen={showPaymentModal} onClose={() => setShowPaymentModal(false)} />
      </section>
    </aside>
  )
}

export default Sidebar
