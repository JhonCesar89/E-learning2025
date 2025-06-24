import Image from 'next/image';
import { Button } from 'flowbite-react';

interface LeftPanelProps {
  onExploreClick: () => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onExploreClick }) => {
	return (
		<div className="flex flex-col w-full h-full justify-center  bg-sky-200/10 border-r border-gray-300 shadow-md rounded-l-2xl overflow-y-auto p-6 sm:p-8">
			
			{/* Illustration */}
			<div className="relative mx-auto w-[250px] h-[200px] sm:w-[350px] sm:h-[300px] lg:w-[450px] lg:h-[450px] mt-6 mb-4">
  			<Image
  			  src="/images/learning.svg"
  			  alt="Illustration of students"
  			  fill
  			  className="rounded-lg object-cover opacity-0 animate-fade-in"
  			  priority
  			/>
			</div>
			<figcaption className="mb-4 text-xs sm:text-sm text-center text-gray-500 dark:text-gray-400">
        ¡Únete a nuestra academia!
      </figcaption>
  
			{/* Heading */}
			<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 text-center mb-6">
			Tu espacio para obtener formación y recursos de calidad.
			</h2>
	
			{/* Description */}
			<p className="text-base sm:text-lg text-gray-700 text-center mx-auto leading-relaxed mb-6 max-w-xl">
			En SkilLogin Academy, te ofrecemos una amplia gama de cursos y recursos diseñados para ayudarte a alcanzar tus metas profesionales. Únete a nuestra comunidad de aprendizaje y comienza tu viaje hacia el éxito hoy mismo.
			</p>

			<h1 className="text-sm sm:text-base font-bold mb-4 text-center">Para continuar sin registrarse haga click aquí.</h1>
        <Button onClick={onExploreClick}>
					Explore nuestros cursos
				</Button>
		</div>
	);
};
  
  export default LeftPanel;
  