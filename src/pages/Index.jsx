import { useState } from "react";
import { Container, VStack, Button, Text, Input, useToast, Progress } from "@chakra-ui/react";
import { FaFileUpload, FaDownload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setFile(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to convert.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    // Simulate file processing and conversion
    setTimeout(() => {
      setLoading(false);
      setDownloadLink('https://images.unsplash.com/photo-1644361566696-3d442b5b482a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb3dubG9hZGFibGUlMjBkb2N4JTIwZmlsZXxlbnwwfHx8fDE3MTUzOTc5NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080'); // This should be replaced with actual file link
      toast({
        title: "Conversion Complete",
        description: "Your Word document is ready for download.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 3000);
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Lao PDF to Word Converter
        </Text>
        <Input type="file" accept=".pdf" placeholder="Upload PDF file" onChange={handleFileChange} size="lg" />
        <Button leftIcon={<FaFileUpload />} colorScheme="blue" onClick={handleUpload} isLoading={loading} loadingText="Converting">
          Upload & Convert
        </Button>
        {loading && <Progress size="xs" isIndeterminate />}
        {downloadLink && (
          <Button as="a" href={downloadLink} download leftIcon={<FaDownload />} colorScheme="green">
            Download Word File
          </Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
