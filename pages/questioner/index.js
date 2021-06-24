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

function Questioner() {
  return (
    <>
      <div className="py-5">
        <Card className="bg-white">
          <CardBody>
            <div className="flex justify-center">
              <p className="font-semibold text-gray-600">
                QUESTIONER KELAYAKAN
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="px-4 py-3 my-5 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div>
          {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
          <Label>Apakah barang yang diajukan merupakan barang baru ?</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="true" name="accountType" />
              <span className="ml-2">Ya</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="false" name="accountType" />
              <span className="ml-2">Tidak</span>
            </Label>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Button type="submit" size="small">
          Next
        </Button>
      </div>
    </>
  )
}

export default Questioner
