import React from 'react';
import Card from '../ui/Card';


const coursesData = [
  {
    id: 1,
    title: 'Contabilidade Empresarial',
    description: 'Com o objetivo de apresentar noções básicas da Contabilidade Empresarial.',
    institution: 'Fundação Bradesco',
    certified: true,
    link: 'https://www.ev.org.br/cursos/Contabilidade-Empresarial',
    
  },
  {
    id: 2,
    title: 'Atendimento ao Público',
    description: 'O objetivo deste curso é apresentar noções de atendimento, suas diferentes formas e técnicas',
    institution: 'Fundação Bradesco',
    certified: false,
    link: 'https://www.ev.org.br/cursos/atendimento-ao-publico',
    
  },
  {
    id: 3,
    title: 'Fundamentos de TI: Hardware e Software',
    description: 'O objetivo deste curso é apresentar os conceitos básicos da informática.',
    institution: 'Fundação Bradesco',
    certified: false,
    link: 'https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software',
    
  },
  {
    id: 4,
    title: 'Estratégia de Negócios',
    description: 'importância da estratégia para o mundo dos negócios. ',
    institution: 'Fundação Bradesco',
    certified: false,
    link: 'https://www.ev.org.br/cursos/estrategia-de-negocios',
    
  },
  {
    id: 5,
    title: 'Criação de Sites com HTML e CSS',
    description: 'Dê vida às suas ideias criando páginas web simples e responsivas.',
    institution: 'Fundação Bradesco',
    certified: false,
    link: 'https://www.ev.org.br/cursos/crie-um-site-simples-usando-html-css-e-javascript',
    
  },
  {
    id: 6,
    title: 'Excel na Prática',
    description: 'Iniciante.',
    institution: 'Fundação Bradesco',
    certified: true,
    link: 'https://www.ev.org.br/cursos/excel-na-pratica',
     },
  {
    id: 7,
    title: 'Marketing Digital',
    description: 'Crie experiências de usuário intuitivas e interfaces de usuário atraentes.',
    institution: 'Curso em Vídeo',
    certified: true,
    link: 'https://www.cursoemvideo.com/curso/marketing-digital',
    
  },
  {
    id: 8,
    title: 'Programação Completa',
    description: 'Aprenda as linguagens completa.',
    institution: 'Curso em Vídeo',
    certified: true,
    link: 'https://www.cursoemvideo.com',
   
  },
];

const CourseCard = ({ course }) => (
  <Card>
    <div className="w-full h-48 overflow-hidden rounded-t-xl mb-4">
      <img
        src={course.imageUrl}
        alt={`Imagem do curso de ${course.title}`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <p className="text-sm text-gray-500 mt-2">
        <span className="font-semibold">Instituição:</span> {course.institution}
      </p>
      <p className="text-sm text-gray-500">
        <span className="font-semibold">Certificado:</span> {course.certified ? 'Sim' : 'Não'}
      </p>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
      >
        Acessar Curso
      </a>
    </div>
  </Card>
);

const CoursesPage = () => {
  // Use o array local de dados em vez de buscar do Firebase
  // const [courses, setCourses] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Código de busca do Firebase
  // }, []);

  return (
    <main className="container-style">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Cursos Online Gratuitos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
};

export default CoursesPage;