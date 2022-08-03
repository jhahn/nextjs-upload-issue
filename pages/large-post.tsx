/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    const largePost = async () => {
        const formData = new FormData()
        const succeeds = new Uint8Array(16383);
        const fails = new Uint8Array(16384);
        self.crypto.getRandomValues(succeeds);
        self.crypto.getRandomValues(fails);
        const response = await fetch("/api/hello", {
            method: "POST",
            body: fails,
        })
        console.log(await response.json())
    }

    return <button onClick={largePost}>Send Large Post</button>
}
