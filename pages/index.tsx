/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const uploadFile = async (files: FileList | null) => {
    if (!files) return
    const formData = new FormData()
    formData.append("file", files[0])
    const response = await fetch("/api/hello", {
      method: "POST",
      body: formData,
    })
    console.log(await response.json())
  }

  return <input type="file" onChange={(e) => uploadFile(e.target.files)} />
}
