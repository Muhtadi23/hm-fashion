import React from 'react';
import { motion } from 'framer-motion';

const LearnMore = () => {
    return (
        <div>
            <motion.button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full border border-gray-200/50 hover:bg-white hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                Learn More
            </motion.button>
        </div>
    );
};

export default LearnMore;