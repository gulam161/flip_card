import { Box } from "@chakra-ui/react";
import Flipcard from "./components/Flipcard.tsx";
import { motion } from "framer-motion";

function App() {
  return (
    <Box
      as="main"
      minH="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      bg="var(--bg-dark)"
      p={{ base: 4, md: 8 }}
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        top="-10%"
        left="-10%"
        w="40%"
        h="40%"
        bg="radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
        filter="blur(50px)"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-10%"
        right="-10%"
        w="50%"
        h="50%"
        bg="radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)"
        filter="blur(60px)"
        zIndex={0}
      />
      
      {/* Mesh Grid Pattern */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.1}
        backgroundImage="radial-gradient(var(--glass-border) 1px, transparent 1px)"
        backgroundSize="30px 30px"
        zIndex={0}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ zIndex: 1, width: "100%", maxWidth: "450px" }}
      >
        <Flipcard />
      </motion.div>
    </Box>
  );
}

export default App;