import 'dotenv/config'
import { app } from "./app"

app.listen(process.env.API_PORT, () => console.log(`API is running on PORT ${process.env.API_PORT}!`))