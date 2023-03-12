import { motion } from 'framer-motion';

const Layout = ({ children }) => (
	<motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ ease: 'easeInOut', duration: 0.22 }}>
		{children}
	</motion.div>
);
export default Layout;
