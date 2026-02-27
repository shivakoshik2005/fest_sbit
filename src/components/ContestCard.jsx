import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';

const ContestCard = ({ contest, index, onRegister }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden group"
    >
      {/* Contest Poster */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={contest.poster}
          alt={contest.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
        
        {/* Trophy Icon */}
        <div className="absolute top-3 right-3 p-2 rounded-lg bg-white/20 backdrop-blur-sm">
          <Trophy className="w-4 h-4 text-yellow-400" />
        </div>
      </div>

      {/* Contest Details */}
      <div className="p-4">
        <h4 className="font-heading font-semibold text-lg text-slate-800 mb-2 group-hover:text-primary transition-colors">
          {contest.name}
        </h4>
        <p className="text-slate-600 text-xs line-clamp-2 mb-3">
          {contest.description}
        </p>
        
        {/* Register Button */}
        <a
          href={contest.registerLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => onRegister && e.stopPropagation()}
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          Register Now
        </a>
      </div>
    </motion.div>
  );
};

export default ContestCard;

