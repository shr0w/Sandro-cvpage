import { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  VStack
} from '@chakra-ui/react'
import AnimationWrapper from './animation-wrapper'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aquí iría la lógica para enviar el formulario
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación de envío
      
      toast({
        title: 'Mensaje enviado',
        description: 'Gracias por contactarme. Te responderé pronto.',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
      
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimationWrapper>
      <Box as="form" onSubmit={handleSubmit} w="100%" maxW="600px">
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Mensaje</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu mensaje..."
              rows={6}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            isLoading={isSubmitting}
            loadingText="Enviando..."
            w="100%"
          >
            Enviar mensaje
          </Button>
        </VStack>
      </Box>
    </AnimationWrapper>
  )
}

export default ContactForm 