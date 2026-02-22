import { BsPhoneFlip } from "react-icons/bs";
import { Icon, Link, Box, VStack, Heading, Text, Flex, HStack } from "@chakra-ui/react";
import { socials } from "../constants/SocialData.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "react-lottie-player";
import Social from "../assets/Socialconnect.json";
import { motion } from "framer-motion";
import WorkWithUsForm from "./WorkWithUsForm.tsx";

type BackCardProps = {
  handleFlip: () => void;
};

const BackCard: React.FC<BackCardProps> = ({ handleFlip }) => {
  return (
    <Box className="cards h-full flex flex-col relative overflow-hidden">
      <ToastContainer />
      
      {/* Background Video */}
      <Box position="absolute" inset={0} zIndex={0}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://www.blacktowerfm.com/wp-content/themes/blacktower/video/footer-horizon-loop.mp4"
            type="video/mp4"
          />
        </video>
        <Box position="absolute" inset={0} bg="rgba(15, 23, 42, 0.85)" backdropFilter="blur(8px)" />
      </Box>

      {/* Content Layer */}
      <VStack spacing={6} p={6} position="relative" zIndex={1} flex={1} alignItems="stretch">
        <VStack spacing={2} textAlign="center">
          <Heading as="h2" size="lg" color="var(--text-primary)" letterSpacing="tight">
            Work with us
          </Heading>
          <Text fontSize="sm" color="var(--text-secondary)" maxW="80%">
            Please fill the form and we will get back to you.
          </Text>
        </VStack>

        <WorkWithUsForm />

        <Box>
          <Text fontSize="xs" fontWeight="bold" color="var(--text-secondary)" textTransform="uppercase" letterSpacing="widest" mb={3} textAlign="center">
            Find me on
          </Text>
          <HStack spacing={4} wrap="wrap" justify="center">
            {socials &&
              socials.map(({ color, icon, id, url }) => (
                <motion.div key={id} whileHover={{ y: -3, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={url} isExternal>
                    <Icon
                      as={icon}
                      color={color || "var(--text-primary)"}
                      fontSize="24px"
                      opacity={0.8}
                      _hover={{ opacity: 1 }}
                    />
                  </Link>
                </motion.div>
              ))}
          </HStack>
        </Box>

        <Flex direction="column" align="center" mt="auto">
          <Lottie
            animationData={Social}
            play
            loop
            style={{ width: '180px', height: '180px', opacity: 0.9 }}
          />
          <Box as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} mt={2}>
            <Flex
              as="button"
              onClick={handleFlip}
              bg="rgba(255, 255, 255, 0.05)"
              py={2}
              px={4}
              borderRadius="full"
              border="1px solid var(--glass-border)"
              color="var(--text-secondary)"
              fontSize="xs"
              fontWeight="bold"
              align="center"
              transition="all 0.2s"
              _hover={{ color: "var(--text-primary)", bg: "rgba(255, 255, 255, 0.1)" }}
            >
              <Icon as={BsPhoneFlip} mr={2} />
              Flip Back
            </Flex>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default BackCard;