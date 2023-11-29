import type { NextApiRequest, NextApiResponse } from "next"
import { Auth } from "lib/auth"
import { User } from "lib/user"
import { findOrCreateAuth } from "lib/controllers/auth"
import { sendCode } from "lib/controllers/auth"
// import { firestore } from "lib/firestore"
import jwt from "jsonwebtoken"
import { generate } from "lib/jwt"

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const token = generate({ userId: 'Siq1acapuQEi2T96cMJs' })
    res.send({ token })
}

