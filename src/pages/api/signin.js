// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import MongoConnect from "../../Database/MongoConnection"
// Utils
import bcrypt from 'bcrypt'

export default async function SignInHandlerMethod(req, res) {
  // MongoDb
  const { db, client } = await MongoConnect()
  const collection = db.collection('users')
  const allUsers = await db.collection('users').find({}).toArray()

  // Requests
  const usernamePost = req.body.username
  const emailPost = req.body.email
  const passwordPost = req.body.password
  const usernameGet = req.query.username
  const emailGet = req.query.email
  const passwordGet = req.query.password

  // Bcrypt
  const SaltRounds = 10

  if (req.method === 'GET') {
    try {
      res.status(200).json(allUsers)
    }
    catch (err) {
      console.log(err);
    }
  }

  if (req.method === 'POST') {
    const email = await collection.find({ email: emailPost }).toArray()

    try {
      if (email[0]) {
        res.status(200).json({
          message: 'Email already exist!'
        })
        return
      }
      if (!usernamePost || !emailPost || !passwordPost) {
        res.status(200).json({
          message: 'Empaty Filds!'
        })
        return
      }
      var hashPassword;
      bcrypt.genSalt(SaltRounds, function (err, salt) {
        bcrypt.hash(passwordPost, salt, (error, hash) => {
          collection.insertOne({
            username: usernamePost,
            email: emailPost,
            password: hash
          })
        })
      })

      res.status(200).json({
        message:'User sign in succefuly!'
      })
    }
    catch (err) {
      console.log(err);
    }
  }

}
