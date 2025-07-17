import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Container,
  Separator,
  SimpleGrid,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline, MdOutlineMail } from "react-icons/md";
import { PiFlask } from "react-icons/pi";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "#319795" },
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

function Badge({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <Box
      as="span"
      px="2"
      py="0.5"
      borderRadius="md"
      fontSize="xs"
      fontWeight="bold"
      bg={color + ".100"}
      color={color + ".700"}
      display="inline-block"
      mr="2"
      mb="1"
    >
      {children}
    </Box>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      p="6"
      border="1px solid"
      borderColor="gray.200"
    >
      {children}
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider value={system}>
      {/* Outermost flex box to center everything */}
      <Box minH="100vh" bg="gray.50" display="flex" flexDirection="column" alignItems="center">
        {/* Navbar (sticky, always at top, centered) */}
        <Box as="nav" position="sticky" top="0" zIndex="100" bg="white" boxShadow="sm" py="3" w="100%">
          <Container maxW="container.xl" px={4} mx="auto">
            <HStack gap={8} justifyContent="flex-start">
              <Link href="#home" color="brand.500" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                <AiOutlineHome size={20} /> Home
              </Link>
              <Link href="#work" color="brand.500" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                <MdWorkOutline size={20} /> Work Experience
              </Link>
              <Link href="#research" color="brand.500" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                <PiFlask size={20} /> Research Projects
              </Link>
              <Link href="#contact" color="brand.500" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                <MdOutlineMail size={20} /> Contact
              </Link>
            </HStack>
          </Container>
        </Box>
        {/* Main content area, centered */}
        <Box flex="1" w="100%" display="flex" flexDirection="column" alignItems="center" py="10">
          <Container maxW="container.xl" px={4} mx="auto">
            {/* Hero Section */}
            <Box id="home" mb={16}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} alignItems="center">
                {/* Left: Description */}
                <VStack alignItems="flex-start" gap={4} justifyContent="center">
                  <Heading as="h1" size="2xl" textAlign="center">
                    Nishant Jha
                  </Heading>
                  <Text fontSize="xl" color="gray.600">
                    Solutions Architect | AI Enthusiast | Researcher
                  </Text>
                  <Text fontSize="md" color="gray.600" maxW="400px">
                    Passionate about building innovative solutions and advancing technology through research and development. Experienced in consulting, research, and full-stack development.
                  </Text>
                  <HStack gap={4} pt={2}>
                    <Link href="mailto:your.email@example.com" color="brand.500" fontWeight="bold">Email</Link>
                    <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" color="brand.500" fontWeight="bold">GitHub</Link>
                    <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" color="brand.500" fontWeight="bold">LinkedIn</Link>
                  </HStack>
                </VStack>
                {/* Right: Profile Picture */}
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg" // Replace with your image
                    alt="Profile"
                    style={{
                      borderRadius: "9999px",
                      width: "180px",
                      height: "180px",
                      maxWidth: "240px",
                      maxHeight: "240px",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.15)",
                      border: "6px solid #319795",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </SimpleGrid>
            </Box>

            {/* Work Experience Section as Timeline */}
            <Box id="work" mb={12}>
              <Heading as="h2" size="xl" mb={8} textAlign="center">
                Work Experience
              </Heading>
              <Box position="relative" pl={8} maxW="600px" mx="auto">
                {/* Vertical line */}
                <Box position="absolute" top={0} left={3} width="2px" height="100%" bg="brand.500" zIndex={0} />
                <VStack alignItems="center" gap={10} position="relative">
                  {/* Timeline Item 1 */}
                  <Box position="relative" w="full" display="flex" justifyContent="center">
                    {/* Marker */}
                    <Box position="absolute" left={-8} top={2} zIndex={1} bg="brand.500" borderRadius="full" boxSize={4} border="3px solid white" boxShadow="md" />
                    <Box pl={6} w="100%" maxW="500px">
                      <Box bg="white" p={6} borderRadius="lg" boxShadow="md" border="1px solid" borderColor="gray.200">
                        <Text fontSize="sm" color="gray.500" mb={1}>
                          Jan 2022 - Present
                        </Text>
                        <Heading size="md" mb={1} textAlign="center">Senior Software Developer</Heading>
                        <Text fontSize="sm" color="gray.600" mb={2} textAlign="center">
                          Tech Corp, Allen, TX
                        </Text>
                        <VStack alignItems="flex-start" gap={1} mb={2}>
                          <Text color="gray.600">- Led development of a React-based application integrated with WebAssembly for high-performance computing.</Text>
                          <Text color="gray.600">- Optimized backend services using C# and Node.js, reducing latency by 30%.</Text>
                          <Text color="gray.600">- Collaborated with cross-functional teams to deliver scalable solutions for e-commerce clients.</Text>
                        </VStack>
                        <Box>
                          <Badge color="green">C#</Badge>
                          <Badge color="blue">React</Badge>
                          <Badge color="purple">WebAssembly</Badge>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Timeline Item 2 */}
                  <Box position="relative" w="full" display="flex" justifyContent="center">
                    {/* Marker */}
                    <Box position="absolute" left={-8} top={2} zIndex={1} bg="brand.500" borderRadius="full" boxSize={4} border="3px solid white" boxShadow="md" />
                    <Box pl={6} w="100%" maxW="500px">
                      <Box bg="white" p={6} borderRadius="lg" boxShadow="md" border="1px solid" borderColor="gray.200">
                        <Text fontSize="sm" color="gray.500" mb={1}>
                          Jun 2019 - Dec 2021
                        </Text>
                        <Heading size="md" mb={1} textAlign="center">Software Engineer</Heading>
                        <Text fontSize="sm" color="gray.600" mb={2} textAlign="center">
                          Innovate Solutions, Dallas, TX
                        </Text>
                        <VStack alignItems="flex-start" gap={1} mb={2}>
                          <Text color="gray.600">- Developed full-stack applications using C# and ASP.NET, improving user engagement by 25%.</Text>
                          <Text color="gray.600">- Implemented CI/CD pipelines, reducing deployment time by 40%.</Text>
                          <Text color="gray.600">- Mentored junior developers on best practices in code quality and testing.</Text>
                        </VStack>
                        <Box>
                          <Badge color="green">C#</Badge>
                          <Badge color="yellow">ASP.NET</Badge>
                          <Badge color="blue">JavaScript</Badge>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </Box>

            {/* Research Section */}
            <VStack id="research" gap={8} alignItems="start">
              <Heading as="h2" size="xl" mb={8} textAlign="center">
                Research Projects
              </Heading>
              <Separator my="2" />
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
                <Card>
                  <Heading size="md" mb={1}>AI-Driven Code Optimization</Heading>
                  <Text fontSize="sm" color="gray.500" mb={3}>
                    Independent Research | 2024
                  </Text>
                  <VStack alignItems="start" gap={2} mb={2}>
                    <Text color="gray.600">- Explored machine learning techniques to optimize WebAssembly code execution, achieving a 15% performance improvement.</Text>
                    <Text color="gray.600">- Published findings in a technical blog, gaining 500+ views within the developer community.</Text>
                  </VStack>
                  <Box>
                    <Badge color="purple">AI</Badge>
                    <Badge color="blue">WebAssembly</Badge>
                  </Box>
                </Card>
                <Card>
                  <Heading size="md" mb={1}>Distributed Systems Analysis</Heading>
                  <Text fontSize="sm" color="gray.500" mb={3}>
                    University Collaboration | 2023
                  </Text>
                  <VStack alignItems="start" gap={2} mb={2}>
                    <Text color="gray.600">- Investigated scalability challenges in distributed systems using C# and cloud infrastructure.</Text>
                    <Text color="gray.600">- Co-authored a paper presented at a regional tech conference, focusing on load balancing algorithms.</Text>
                  </VStack>
                  <Box>
                    <Badge color="green">C#</Badge>
                    <Badge color="teal">Cloud Computing</Badge>
                  </Box>
                </Card>
              </SimpleGrid>
            </VStack>

            {/* Contact Section */}
            <Box id="contact" as="footer" textAlign="center" mt="12">
              <Separator my="6" />
              <Heading as="h3" size="md" mb="2" textAlign="center">Contact</Heading>
              <HStack gap={6} justifyContent="center">
                <Link href="mailto:your.email@example.com" color="brand.500" fontWeight="bold">Email</Link>
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" color="brand.500" fontWeight="bold">GitHub</Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" color="brand.500" fontWeight="bold">LinkedIn</Link>
              </HStack>
            </Box>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;