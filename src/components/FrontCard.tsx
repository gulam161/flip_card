import { Icon, Box, Text, Flex, Heading, VStack, Badge, HStack, Image } from "@chakra-ui/react";
import { data } from "../constants/SkillData.ts";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import ProfilePhoto from "./ProfilePhoto.tsx";
import { motion } from "framer-motion";

interface FrontCardProps {
  handleFlip: () => void;
}

const FrontCard: React.FC<FrontCardProps> = ({ handleFlip }) => {
  return (
    <Box className="cards h-full flex flex-col">
      {/* Background Video with subtle overlay */}
      <Box position="absolute" inset={0} zIndex={0}>
        <video
          className="w-full h-full object-cover"
          playsInline
          autoPlay
          loop
          muted
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
        >
          <source
            src="https://www.blacktowerfm.com/wp-content/uploads/2021/08/home-montage.mp4"
            type="video/mp4"
          />
        </video>
        <Box position="absolute" inset={0} bg="rgba(15, 23, 42, 0.75)" backdropFilter="auto" backdropBlur="xs" />
      </Box>

      {/* Content Layer */}
      <VStack spacing={6} p={6} position="relative" zIndex={1} flex={1} alignItems="stretch">
        {/* Profile Section */}
        <VStack spacing={4}>
          <ProfilePhoto />

          <VStack spacing={1}>
            <HStack color="var(--text-secondary)">
              <Badge colorScheme="indigo" variant="outline" px={3} py={1} borderRadius="full" fontSize="xs" className="border border-indigo-500 font-light">
                SWE
              </Badge>
            </HStack>
            <Heading as="h1" fontSize="2xl" color="var(--text-primary)" letterSpacing="tight">
              Mohsin Shaikh
            </Heading>
            <HStack spacing={1} color="var(--text-secondary)" fontSize="sm">
              <Icon as={FaLocationDot} color="var(--primary)" />
              <Text>Navi Mumbai, MH, India</Text>
            </HStack>
          </VStack>
        </VStack>

        <Box w="full" h="1px" bgGradient="linear(to-r, transparent, var(--glass-border), transparent)" />

        {/* Summary */}
        <Box>
          <Text fontSize="sm" fontWeight="bold" color="var(--text-secondary)" textTransform="uppercase" letterSpacing="widest" mb={2}>
            Summary
          </Text>
          <Text fontSize="15px" color="var(--text-primary)" textAlign="justify" lineHeight="tall" opacity={0.9}>
            A results-driven Software Engineer specializing in modern web
            architecture, AI-powered interfaces, and Web3 applications. I
            craft high-performance user experiences backed by
            clean, scalable, and maintainable code.
          </Text>
        </Box>

        {/* Skills */}
        <Box>
          <Text fontSize="sm" fontWeight="bold" color="var(--text-secondary)" textTransform="uppercase" letterSpacing="widest" mb={4}>
            Tech Stack
          </Text>
          <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(32px, 1fr))" gap={4}>
            {data &&
              data.map(({ id, icon, color }) => (
                <motion.div
                  key={id}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {typeof icon === 'string' ? (
                    <Image src={icon} w="24px" h="24px" filter="drop-shadow(0 0 8px rgba(0,0,0,0.5))" />
                  ) : (
                    <Icon
                      as={icon}
                      color={color || "var(--text-primary)"}
                      fontSize="24px"
                      filter="drop-shadow(0 0 8px rgba(0,0,0,0.5))"
                    />
                  )}
                </motion.div>
              ))}
          </Box>
        </Box>

        {/* Action Button */}
        <Box as={motion.div} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ marginTop: "auto" }}>
          <Flex
            as="button"
            onClick={handleFlip}
            w="full"
            bg="var(--primary)"
            color="white"
            py={4}
            px={6}
            borderRadius="xl"
            justify="center"
            align="center"
            fontWeight="bold"
            boxShadow="0 4px 15px rgba(99, 102, 241, 0.4)"
            transition="all 0.3s"
            _hover={{ bg: "var(--primary-hover)" }}
          >
            Let's connect
            <Icon as={MdOutlineConnectWithoutContact} ml={3} fontSize="xl" />
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default FrontCard;
