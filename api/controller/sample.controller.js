export const sampleApi = async(req, res) => {
    try {
        console.log("geh");
        await res.send({ message: "Welcome to Realtime sentiment analysis folks...!" })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })

    }

}