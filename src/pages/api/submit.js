// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {

  const liquor = req.body.radioLiquor;

  res.redirect('../../drinkDisplay?liquor=' + liquor);
}
