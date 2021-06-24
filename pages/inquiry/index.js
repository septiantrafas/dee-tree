import {
  Card,
  CardBody,
  Input,
  HelperText,
  Label,
  Select,
  Button,
  Textarea,
} from '@windmill/react-ui'

function Form() {
  return (
    <>
      <div className="py-5">
        <Card className="bg-white">
          <CardBody>
            <div className="flex justify-center">
              <p className="font-semibold text-gray-600">
                FORM PERMINTAAN BARANG & JASA
              </p>
            </div>
          </CardBody>
        </Card>
        <div className="px-4 py-3 my-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Label>
            <span>Nama</span>
            <Input className="mt-2 border p-2" placeholder="Jane Doe" />
          </Label>
          <Label className="mt-3">
            <span>Nama Barang</span>
            <Input className="mt-2 border p-2" placeholder="Jane Doe" />
          </Label>
          <Label className="mt-3">
            <span>Estimasi Jumlah Barang</span>
            <Input className="mt-2 border p-2" placeholder="Jane Doe" />
          </Label>
          <Label className="mt-3">
            <span>Estimasi Harga Barang</span>
            <Input className="mt-2 border p-2" placeholder="Jane Doe" />
          </Label>
          <Label className="mt-3">
            <span>Keterangan </span>
            <Textarea className="mt-2 border p-2" placeholder="Jane Doe" />
          </Label>
          <div className="mt-4 flex justify-between">
            <Button type="submit" size="small">
              Cancel
            </Button>
            <Button type="submit" size="small">
              <a href="/questioner">Submit</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
