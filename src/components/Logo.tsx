
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 font-bold text-xl"
    >
      <div className="w-7 h-7 bg-brand-purple rounded-md flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      </div>
      <span>Grad Chronicles</span>
    </Link>
  );
};

export default Logo;
