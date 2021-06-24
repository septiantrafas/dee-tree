import Head from 'next/head'
import store from '../app/store'
import { Provider } from 'react-redux'
import {
  Card,
  CardBody,
  TableContainer,
  Table,
  TableHeader,
  TableFooter,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Button,
  Badge,
} from '@windmill/react-ui'

export default function Home() {
  return (
    <Provider store={store}>
      <Head>
        <title>Trafas | Pengajuan</title>
      </Head>
      <div className="py-5">
        <Card className="bg-gray-100">
          <CardBody>
            <div className="flex justify-center">
              <p className="font-semibold text-gray-600">
                PERMINTAAN BARANG & JASA
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex mb-4 justify-end">
        <Button size="small">
          <a href="/inquiry">+ new inquiry</a>
        </Button>
      </div>
      <div>
        <TableContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold ml-2">INQ230621</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">23 Jun 2021</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ 534.87</span>
                </TableCell>
                <TableCell>
                  <Badge type="success">Approved</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={10}
              resultsPerPage={4}
              onChange={() => {}}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      </div>
    </Provider>
  )
}
