import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <div className='p-4 md:p-8'>
        <h1 className='text-xl md:text-3xl font-bold text-center p-4 mb-4 md:mb-8'>
          Política de Privacidad para Pizza Río
        </h1>
        <p className='mb-2 text-center'>Última actualización: 29/02/2024</p>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-justify'>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Introducción
          </h2>
          <p className='mb-4'>
            En Pizza Río, accesible desde www.pizzario.com.bo o desde la
            aplicación Pizza Río disponible desde Apple store y Play Store, la
            privacidad de nuestros visitantes es de suma importancia. Esta
            Política de Privacidad explica el tipo de información que recogemos,
            cómo la usamos, y cómo protegemos tu privacidad cuando utilizas
            nuestro sitio web y servicios.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Consentimiento
          </h2>
          <p className='mb-4'>
            Al utilizar nuestro sitio web y servicios, aceptas nuestra Política
            de Privacidad y das tu consentimiento para la recolección y uso de
            la información según se describe en este documento.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Información que recopilamos
          </h2>
          <p className='mb-1'>
            Para ofrecerte la sucursal de Pizza Río más cercana y permitirte
            realizar pedidos de pizza o de nuestro restaurante, necesitamos
            recopilar cierta información, que incluye, pero no se limita a:
          </p>
          <p>
            <b>Datos de Geolocalización:</b> Para identificar la sucursal más
            cercana, solicitamos acceso a tu ubicación geográfica. Este acceso
            se pide con tu consentimiento explícito y solo se utiliza para este
            propósito.
          </p>
          <p className='mb-4'>
            <b>Datos de Registro:</b> Al completar un pedido, te pediremos que
            te registres y proporciones información personal, como tu nombre y
            número de teléfono. También puedes elegir proporcionar tu dirección
            para facilitar la entrega de tu pedido. Información de Pedidos:
            Recopilamos detalles de tus pedidos, incluyendo tus preferencias
            alimenticias y cualquier instrucción especial, para personalizar y
            completar tu experiencia de pedido.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Uso de la Información
          </h2>
          <p>La información recopilada se utiliza para:</p>
          <div className='mb-4'>
            <li className='md:ml-4'>
              Identificar la sucursal de Pizza Río más cercana a tu ubicación.
            </li>
            <li className='md:ml-4'>
              Crear y gestionar tu cuenta de usuario para procesar pedidos.
            </li>
            <li className='md:ml-4'>
              Comunicarnos contigo para confirmar y actualizar el estado de tus
              pedidos.
            </li>
            <li className='md:ml-4'>
              Mejorar y personalizar tu experiencia de usuario y nuestros
              servicios.
            </li>
            <li className='md:ml-4'>
              Cumplir con obligaciones legales y resolver disputas.
            </li>
          </div>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Compartir Información Personal
          </h2>
          <p className='mb-4'>
            No compartimos tu información personal con terceros, excepto en los
            casos necesarios para proporcionar los servicios solicitados, como
            la entrega de pedidos, o cuando lo exija la ley.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Cookies y Tecnologías de Seguimiento
          </h2>
          <p className='mb-4'>
            Utilizamos cookies y tecnologías similares para mejorar tu
            experiencia en nuestro sitio web, analizar cómo se utiliza nuestro
            sitio y ofrecer contenido personalizado. Puedes gestionar tus
            preferencias de cookies a través de la configuración de tu
            navegador.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Seguridad de la Información
          </h2>
          <p className='mb-4'>
            Nos comprometemos a proteger tu información personal. Implementamos
            medidas de seguridad técnicas y organizativas para prevenir el
            acceso no autorizado, la pérdida o el daño de tu información.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Tus Derechos
          </h2>
          <p className='mb-4'>
            Respecto a tus datos personales, tienes derecho a acceder, corregir,
            eliminar, limitar el procesamiento, oponerte al procesamiento y
            solicitar la portabilidad de tus datos. Para ejercer estos derechos,
            por favor contáctanos utilizando la información proporcionada abajo.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>
            Cambios a esta Política de Privacidad
          </h2>
          <p className='mb-4'>
            Nos reservamos el derecho de modificar esta política de privacidad
            en cualquier momento. Te recomendamos revisarla periódicamente. Los
            cambios entrarán en vigor inmediatamente después de su publicación
            en el sitio web.
          </p>
          <h2 className='text-lg md:text-xl font-semibold mb-2'>Contacto</h2>
          <p>
            Si tienes preguntas o preocupaciones sobre nuestra política de
            privacidad, por favor contáctase con:
          </p>
          <p>
            <b> Alejandro Soljancic</b>
          </p>
          <p>
            <b>CEO de Toptech Srl</b>
          </p>
          <a href='mailto:asoljancic@toptech.com.bo' className='text-blue-500'>
            asoljancic@toptech.com.bo
          </a>
        </div>
      </div>
      <div className='text-center mb-16 mt-4'>
        <Link
          href={'/'}
          title='Regresar'
          className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md'
        >
          Regresar al sitio
        </Link>
      </div>
    </>
  )
}
