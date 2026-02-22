import { FormEvent, useState } from "react";
import { BsPhoneFlip } from "react-icons/bs";
import { Button, Icon, Input, Link, Textarea, Box, VStack, Heading, Text, Grid, Flex, HStack } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { socials } from "../constants/SocialData.ts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "react-lottie-player";
import Social from "../assets/Socialconnect.json";
import { motion } from "framer-motion";

type BackCardProps = {
  handleFlip: () => void;
};

const BackCard: React.FC<BackCardProps> = ({ handleFlip }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "3ddf160b-03f8-42c4-b525-d184fad95a14",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        setTimeout(() => {
          setLoading(false);
          handleFlip();
        }, 2000);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send message.");
      });
  };

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
        <Box position="absolute" inset={0} bg="rgba(15, 23, 42, 0.8)" backdropFilter="blur(4px)" />
      </Box>

      {/* Content Layer */}
      <VStack spacing={6} p={6} position="relative" zIndex={1} flex={1} alignItems="stretch">
        <Box>
          <Heading as="h4" size="md" color="var(--text-primary)" mb={1}>
            Message Me
          </Heading>
          <Text fontSize="xs" color="var(--text-secondary)" textTransform="uppercase" letterSpacing="widest">
            I'll get back to you soon
          </Text>
        </Box>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Grid templateColumns="repeat(2, 1fr)" gap={4}>
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="filled"
                bg="rgba(255, 255, 255, 0.05)"
                border="1px solid var(--glass-border)"
                _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                _focus={{ bg: "rgba(255, 255, 255, 0.1)", borderColor: "var(--primary)" }}
                color="white"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="filled"
                bg="rgba(255, 255, 255, 0.05)"
                border="1px solid var(--glass-border)"
                _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
                _focus={{ bg: "rgba(255, 255, 255, 0.1)", borderColor: "var(--primary)" }}
                color="white"
              />
            </Grid>
            <Input
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              variant="filled"
              bg="rgba(255, 255, 255, 0.05)"
              border="1px solid var(--glass-border)"
              _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.1)", borderColor: "var(--primary)" }}
              color="white"
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              variant="filled"
              bg="rgba(255, 255, 255, 0.05)"
              border="1px solid var(--glass-border)"
              _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.1)", borderColor: "var(--primary)" }}
              color="white"
            />
            <Button
              isLoading={loading}
              type="submit"
              bg="var(--primary)"
              color="white"
              _hover={{ bg: "var(--primary-hover)" }}
              rightIcon={<Icon as={IoSend} />}
              size="lg"
              borderRadius="xl"
            >
              Send Message
            </Button>
          </VStack>
        </form>

        <Box>
          <Text fontSize="sm" fontWeight="bold" color="var(--text-secondary)" textTransform="uppercase" letterSpacing="widest" mb={4}>
            Get Social
          </Text>
          <HStack spacing={4} wrap="wrap" justify="center">
            {socials &&
              socials.map(({ color, icon, id, url }) => (
                <motion.div key={id} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link href={url} isExternal>
                    <Icon
                      as={icon}
                      color={color || "var(--text-primary)"}
                      fontSize="28px"
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
            style={{ width: '120px', height: '120px' }}
          />
          <Box as={motion.div} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} mt={4}>
            <Flex
              as="button"
              onClick={handleFlip}
              bg="transparent"
              color="var(--text-secondary)"
              fontSize="sm"
              fontWeight="bold"
              align="center"
              _hover={{ color: "var(--text-primary)" }}
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