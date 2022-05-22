import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({
    query: req.query,
  });
  res.redirect(<string>req.query.slug);
}
