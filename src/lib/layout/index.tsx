import { Box, Flex, Heading } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { ReactNode } from "react";

import ThemeToggle from "./ThemeToggle";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth="90vw" transition="0.5s ease-out">
      <Flex justify="space-between" pt={3}>
        <Heading as="h2">StarterKit 🎉</Heading>
        <Flex gap={2} alignItems="center">
          <ConnectButton />
          <ThemeToggle />
        </Flex>
      </Flex>
      <Flex wrap="wrap" margin="8" minHeight="90vh">
        <Box width="full" as="main" marginY={22}>
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
