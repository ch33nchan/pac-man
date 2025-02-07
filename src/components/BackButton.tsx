import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-4 left-4 z-50 w-16 h-16 flex flex-col items-center justify-center
                 bg-black border-2 border-blue-500 rounded-lg transition-all duration-300 
                 hover:scale-110 group"
    >
      <span className="text-3xl text-yellow-400 group-hover:animate-bounce">←</span>
      <span className="text-xs text-white font-press-start mt-1">BACK</span>
    </button>
  );
};

export default BackButton;