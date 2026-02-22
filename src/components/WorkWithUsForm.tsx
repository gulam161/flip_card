import React, { useRef, useState } from "react";
import { 
  VStack, 
  Input, 
  Button, 
  FormControl, 
  FormLabel, 
  Grid, 
  Box,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const key = import.meta.env.VITE_ACCESS_KEY;

const WorkWithUsForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const file = fileRef.current?.files?.[0];
    if (file && file.size > 1024 * 1024) {
      toast.error("File too large. Max 1MB allowed.");
      return;
    }

    setLoading(true);
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        formRef.current.reset();
      } else {
        const json = await response.json();
        toast.error(json.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    variant: "filled",
    bg: "rgba(255, 255, 255, 0.05)",
    border: "1px solid var(--glass-border)",
    _hover: { bg: "rgba(255, 255, 255, 0.08)" },
    _focus: { bg: "rgba(255, 255, 255, 0.1)", borderColor: "var(--primary)" },
    color: "white",
    fontSize: "sm",
    h: "45px",
    borderRadius: "md",
  };

  const labelStyles = {
    fontSize: "sm",
    fontWeight: "500",
    color: "var(--text-primary)",
    mb: 2,
    opacity: 0.9,
  };

  return (
    <Box as="form" ref={formRef} onSubmit={handleSubmit} w="full">
      {/* Web3Forms Config */}
      <input type="hidden" name="access_key" value={key} />
      <input type="hidden" name="subject" value="New Careers Submission" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <VStack spacing={5} align="stretch">
        {/* Name Grid */}
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <FormControl isRequired>
            <FormLabel {...labelStyles}>First Name</FormLabel>
            <Input name="name" placeholder="John" {...inputStyles} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel {...labelStyles}>Last Name</FormLabel>
            <Input name="last_name" placeholder="Doe" {...inputStyles} />
          </FormControl>
        </Grid>

        {/* Contact Grid */}
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <FormControl isRequired>
            <FormLabel {...labelStyles}>Email Address</FormLabel>
            <Input name="email" type="email" placeholder="you@company.com" {...inputStyles} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel {...labelStyles}>Phone Number</FormLabel>
            <Input name="phone" placeholder="+1 (555) 1234-567" {...inputStyles} />
          </FormControl>
        </Grid>

        {/* File Upload Section */}
        {/* <FormControl isRequired>
          <FormLabel {...labelStyles}>Upload Resume (.pdf or .docx. Less than 1 MB)</FormLabel>
          <HStack 
            bg="rgba(255, 255, 255, 0.03)"
            border="1px solid var(--glass-border)"
            borderRadius="md"
            spacing={0}
            overflow="hidden"
            h="40px"
          >
            <Button
              as="label"
              htmlFor="file-upload"
              cursor="pointer"
              bg="rgba(255, 255, 255, 0.1)"
              color="white"
              fontSize="xs"
              px={4}
              h="full"
              borderRadius="none"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _active={{ bg: "rgba(255, 255, 255, 0.15)" }}
            >
              Choose File
            </Button>
            <Text px={3} fontSize="xs" color={fileName === "No file chosen" ? "var(--text-secondary)" : "white"} isTruncated>
              {fileName}
            </Text>
          </HStack>
          <input
            id="file-upload"
            ref={fileRef}
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            required
            onChange={(e) => {
              const file = e.target.files?.[0];
              setFileName(file ? file.name : "No file chosen");
            }}
          />
        </FormControl> */}

        <Button
          isLoading={loading}
          type="submit"
          bg="var(--primary)"
          color="white"
          _hover={{ bg: "var(--primary-hover)", transform: "translateY(-1px)" }}
          _active={{ transform: "translateY(0)" }}
          size="lg"
          w="full"
          borderRadius="md"
          h="50px"
          fontWeight="bold"
          fontSize="md"
          boxShadow="0 4px 15px rgba(99, 102, 241, 0.3)"
        >
          Send message
        </Button>
      </VStack>
    </Box>
  );
};

export default WorkWithUsForm;