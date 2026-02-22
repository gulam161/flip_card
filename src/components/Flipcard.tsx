import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "./FrontCard.tsx";
import BackCard from "./BackCard.tsx";
import { Box } from "@chakra-ui/react";

const Flipcard = () => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const handleFlip = (): void => {
    setFlipped(!flipped);
  };

  return (
    <Box w="full" h={{ base: "auto", md: "85vh" }} minH={{ base: "550px", md: "800px" }} maxH="850px" position="relative">
      <ReactCardFlip
        flipDirection="horizontal"
        isFlipped={flipped}
        infinite={true}
        containerClassName="w-full h-full"
      >
        <FrontCard handleFlip={handleFlip} />
        <BackCard handleFlip={handleFlip} />
      </ReactCardFlip>
    </Box>
  );
};

export default Flipcard;