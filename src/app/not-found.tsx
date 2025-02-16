
import errorData from "@/config/errorData.json"
import ErrorPage from "@/components/error/ErrorPage "
import BrandingHeader from "@/components/headers/BrandingHeader"

export default function NotFound() {
  return (
    <>
      <BrandingHeader />
      <ErrorPage data={errorData.data} />
    </>
  )
}