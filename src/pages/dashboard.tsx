import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from 'apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
}) 

const options : ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: true,    
  },
  labels: [
    '2021-08-13T00:00:00.000Z',
    '2021-08-14T00:00:00.000Z',
    '2021-08-15T00:00:00.000Z',
    '2021-08-16T00:00:00.000Z',
    '2021-08-17T00:00:00.000Z',
    '2021-08-18T00:00:00.000Z',
    '2021-08-19T00:00:00.000Z',
  ],
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-08-13T00:00:00.000Z',
      '2021-08-14T00:00:00.000Z',
      '2021-08-15T00:00:00.000Z',
      '2021-08-16T00:00:00.000Z',
      '2021-08-17T00:00:00.000Z',
      '2021-08-18T00:00:00.000Z',
      '2021-08-19T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};

const options2 : ApexOptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};
const series = [
  { name: 'series1', data: [31, 120, 28, 51, 18, 109, 130] }
];

export default function Dashboard() {
  return(
    <Flex direction="column" h="98vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" h="70%">
          <Box
            p={["3", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["3", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart options={options2} series={options2.series} type="pie" height={160} />          
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}