// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { users } from "../../users";

export default function handler(req, res) {
  res.status(200).json(users);
  {
    const user = req.body.user;

    const newUser = {
      id: Date.now(),
      name: user,
    };

    users.push(newUser);

    res.status(200).json(newUser);
  }
}
