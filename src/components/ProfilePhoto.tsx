import { Avatar, Box, Icon } from "@chakra-ui/react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import profile from "./../assets/my-image.jpeg";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ProfilePhoto = () => {
  return (
    <Box position="relative">
      <MotionBox
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Avatar
          size="2xl"
          src={profile}
          name="Mohsin Shaikh"
          border="3px solid var(--primary)"
          p={1}
          bg="transparent"
          className="pointer-events-none"
          transition="all 0.3s"
          _hover={{ transform: "scale(1.05)", borderColor: "var(--primary)" }}
        />
        <Icon
          as={RiVerifiedBadgeFill}
          position="absolute"
          bottom="2"
          right="2"
          fontSize="24px"
          color="var(--primary)"
          bg="white"
          borderRadius="full"
          boxShadow="0 0 10px rgba(0,0,0,0.2)"
        />
      </MotionBox>
    </Box>
  );
};

export default ProfilePhoto;
