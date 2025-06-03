import Image from 'next/image';
import { Button } from 'flowbite-react';

interface LeftPanelProps {
  onExploreClick: () => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ onExploreClick }) => {
	return (
		<div className="flex flex-col w-full h-full justify-center items-center bg-sky-200/10 border-r border-gray-300 shadow-md rounded-l-2xl overflow-hidden">
			{/* Illustration */}
			<Image
			src="/images/learning.svg"
			alt="Illustration of students"
			width={600}
			height={600}
			className="mt-6 mb-2 rounded-full max-w-[80%] object-contain"
			/>
			<figcaption className="mb-6 text-sm text-center text-gray-500 dark:text-gray-400">
        ¡Únete a nuestra academia!
      </figcaption>
  
			{/* Heading */}
			<h2 className="text-4xl font-bold text-blue-600 text-center mt-4 mb-8">
			Tu espacio para obtener formación y recursos de calidad.
			</h2>
	
			{/* Description */}
			<p className="text-xl text-gray-700 text-center leading-relaxed p-6">
			En SkilLogin Academy, te ofrecemos una amplia gama de cursos y recursos diseñados para ayudarte a alcanzar tus metas profesionales. Únete a nuestra comunidad de aprendizaje y comienza tu viaje hacia el éxito hoy mismo.
			</p>

			<h1 className="text-lg font-bold mb-4">Para continuar sin registrarse haga click aquí.</h1>
        <Button onClick={onExploreClick}>
					Explore nuestros cursos
				</Button>
		</div>
	);
};
  
  export default LeftPanel;
  