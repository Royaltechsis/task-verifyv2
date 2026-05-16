import { motion } from 'framer-motion';
import WalletHub from '../components/WalletHub';

export default function Finance() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-24 pb-20 bg-slate-50 min-h-screen"
    >
      <div className="page-container">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-navy-900 tracking-tight leading-tight">Wallet Hub</h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-1">Manage your earnings, escrow, and financial reputation.</p>
        </div>
        <WalletHub />
      </div>
    </motion.div>
  );
}
