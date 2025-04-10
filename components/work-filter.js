import { useState } from 'react'
import { Box, Flex, Input, Select } from '@chakra-ui/react'

const WorkFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    year: 'all'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  return (
    <Box mb={8}>
      <Flex gap={4} flexWrap="wrap">
        <Input
          placeholder="Buscar proyectos..."
          name="search"
          value={filters.search}
          onChange={handleChange}
          maxW="300px"
        />
        <Select
          name="category"
          value={filters.category}
          onChange={handleChange}
          maxW="200px"
        >
          <option value="all">Todas las categorías</option>
          <option value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="design">Design</option>
        </Select>
        <Select
          name="year"
          value={filters.year}
          onChange={handleChange}
          maxW="150px"
        >
          <option value="all">Todos los años</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </Select>
      </Flex>
    </Box>
  )
}

export default WorkFilter 