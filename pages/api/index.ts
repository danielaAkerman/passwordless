import type { NextApiRequest, NextApiResponse } from "next"

export default function (req: NextApiRequest, res: NextApiResponse) {
    res.send("Hola soy la api " + process.env.FIREBASE_CONNECTION)
}